import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAppDispatch } from "../store/hooks";
import { addPost } from "../store/postsSlice";

export default function AddScreen() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    dispatch(
      addPost({
        id: Date.now().toString(),
        title,
        body,
      })
    );
  };
  return (
    <View style={styles.container}>
      <Text>Add New Post</Text>
      <TextInput label={"Title"} value={title} onChangeText={setTitle} />
      <TextInput
        label={"Body"}
        multiline
        numberOfLines={5}
        onChangeText={setBody}
      />
      <Button onPress={handleSubmit}>Submit</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
