import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
  loginbtn: {
    height: 40,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "blue",
    justifyContent: "center"
  },
  loginText:
  {
    alignSelf: "center",
    fontSize: 14,
    color: "white"
  },
  signUpText:
  {
    alignSelf: "center",
    fontSize: 14,
    color: "blue",
    marginTop: 20
  },
  imageContainer:
  {
    position: "absolute",
    right: 10,
    top: 10
  },
  img:
  {
    width: 25,
    height: 25
  }
});
