import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'flex bg-white items-center',
  button: 'w/13 hw-13 items-center justify-center rounded-full bg-blue-600 absolute z-10 bottom-5 right-5',
  list: 'w/100 mt-2 self-center px-5',
  empty: 'mx-5 text-black text-normal text-center',
  text: 'text-center text-normal',
  loadingWrapper: 'items-center justify-center flex',

  modal: 'flex',
  modalInside: 'flex px-5 mt-2',
  input: 'border border-gray-500 px-2 rounded-md py-1 mt-1',
  btn: 'mb-8 bg-blue-500 mx-5 self-end px-5 shadow-lg py-2 rounded-md',
  btnLabel: 'text-white font-bold',
  filterWrapper: 'row justify-end mb-8 mx-2',
  btnFilter: 'bg-white mx-2 border border-gray-300 self-end px-5 shadow-lg py-2 rounded-md',
  btnFilterLabel: 'text-black font-bold'
})
