import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    padding: 10,
    paddingTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  form_container: {
    // width: "90%",
  },

  container_list: {
    // flex: 1,
    backgroundColor: '#DCDCDC',
    height: '80%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    width: "100%",
    fontSize: 18,
    marginBottom:12
  },

  btn_txt: {
    fontSize: 20,
    color: 'white',
  },

  btn: {
    backgroundColor: '#B22222',
    borderRadius: 12,
    padding: 12,
    width: "100%",
    fontSize: 18,
    alignItems: "center",
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 15,
    fontSize: 40,
  },

  todos_container: {
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    width: "100%",
    fontSize: 18,
    // alignItems: "center",

  },

  todo_view: {
    borderRadius: 12,
    padding: 12,
    width: "100%",
    fontSize: 18,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5
  },

  row: {
    flexDirection: 'row',
    paddingLeft: 10
  },

})