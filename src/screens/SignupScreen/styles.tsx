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
  },
  loginBtnContainer:
  {
    marginTop: 10
  }
});
