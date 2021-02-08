import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  TextInput,
  StatusBar,
  FlatList,
  Modal,
  View,
  Text,
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Icon from 'react-native-vector-icons/Feather'

import PaymentActions from '../Redux/PaymentRedux'

// Components
import Header from '../Components/Header'
import List from '../Components/List'
import Button from '../Components/Button'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth } from 'osmicsx'

const WelcomeScreen = props => {
  const { list, navigation } = props
  const [modalAdd, setModalAdd] = useState(false)
  const [modalFilter, setModalFilter] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [val, setVal] = useState('')
  const [paymentList, setPaymentList] = useState([])
  const [selected, setSelected] = useState({})

  useEffect(() => {
    props.getList()
  }, [])

  useEffect(() => {
    if (list.data) {
      setPaymentList(list.data)
    }
  }, [list])

  console.log(paymentList)

  const onRefresh = useCallback(() => props.getList(), [])

  const onListClick = useCallback((item) => {
    props.getPaymentId(item?.id)
    setSelected(item)
    setVal(item?.name)
    setModalEdit(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setVal('')
    setModalAdd(false)
    setModalFilter(false)
    setModalEdit(false)
  }, [modalAdd, modalFilter, modalEdit])

  const onBtnClick = useCallback((type) => {
    if (val !== '') {
      switch (type) {
        case 'add':
          props.addPayment({ name: val })
          setModalAdd(false)
          setVal('')
          break
        case 'filter':
          setPaymentList(list?.data.filter(item => item?.name.toLowerCase().includes(val.toLowerCase())))
          setModalFilter(false)
          setVal('')
        case 'edit':
          props.updatePaymentId({
            id: selected?.id,
            data: { name: val }
          })
          setModalEdit(false)
          setVal('')
        default:
          break
      }
    }
  }, [val, selected])

  const clearFilter = useCallback(() => {
    setPaymentList(list?.data)
    setModalFilter(false)
    setVal('')
  }, [list, paymentList])

  const remove = useCallback((item) => {
    props.removePaymentId(item?.id)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={apply('white')} />

      <Modal
      visible={modalAdd}
      animationType='slide'
      onRequestClose={onCloseModal}>
        <View style={styles.modal}>
          <Header type='back' title='Tambah Pembayaran' back={onCloseModal} />
          <View style={styles.modalInside}>
            <Text style={styles.label}>Nama</Text>
            <TextInput style={styles.input} value={val} onChangeText={setVal} />
          </View>
          <Button disable={val === ''} style={styles.btn} onPress={() => onBtnClick('add')}>
            <Text style={styles.btnLabel}>Simpan</Text>
          </Button>
        </View>
      </Modal>

      <Modal
      visible={modalFilter}
      animationType='slide'
      onRequestClose={onCloseModal}>
        <View style={styles.modal}>
          <Header type='back' title='Filter Pembayaran' back={onCloseModal} />
          <View style={styles.modalInside}>
            <Text style={styles.label}>Nama</Text>
            <TextInput style={styles.input} value={val} onChangeText={setVal} />
          </View>
          <View style={styles.filterWrapper}>
            <Button disable={val === ''} style={styles.btnFilter} onPress={clearFilter}>
              <Text style={styles.btnFilterLabel}>Hapus Filter</Text>
            </Button>
            <Button disable={val === ''} style={styles.btnFilter} onPress={() => onBtnClick('filter')}>
              <Text style={styles.btnFilterLabel}>Terapkan</Text>
            </Button>
          </View>
        </View>
      </Modal>

      <Modal
      visible={modalEdit}
      animationType='slide'
      onRequestClose={onCloseModal}>
        <View style={styles.modal}>
          <Header type='back' title='Edit Pembayaran' back={onCloseModal} />
          <View style={styles.modalInside}>
            <Text style={styles.label}>Nama</Text>
            <TextInput style={styles.input} value={val} onChangeText={setVal} />
          </View>
          <Button disable={val === ''} style={styles.btn} onPress={() => onBtnClick('edit')}>
            <Text style={styles.btnLabel}>Simpan</Text>
          </Button>
        </View>
      </Modal>

      <Header title='Pembayaran' type='filter' filter={() => setModalFilter(true)} />
      {list?.fetching ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator color='#000' size='large' />
        </View>
      ) : (
        <FlatList
          data={paymentList}
          style={styles.list}
          refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={<Text style={styles.empty}>Tidak ada metode pembayaran tersimpan.</Text>}
          renderItem={({ item }) =>
            <List item={item} onPress={() => onListClick(item)} remove={() => remove(item)} />
          }
        />
      )}
      <TouchableOpacity onPress={() => setModalAdd(true)} activeOpacity={0.8} style={styles.button}>
        <Icon name='plus' size={scaleWidth(8)} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  list: state.payment.list,
  detail: state.payment.detail,
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(PaymentActions.getPaymentRequest()),
  addPayment: (data) => dispatch(PaymentActions.addPaymentRequest(data)),
  getPaymentId: (id) => dispatch(PaymentActions.getPaymentIdRequest(id)),
  updatePaymentId: (data) => dispatch(PaymentActions.updatePaymentIdRequest(data)),
  removePaymentId: (id) => dispatch(PaymentActions.deletePaymentIdRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
