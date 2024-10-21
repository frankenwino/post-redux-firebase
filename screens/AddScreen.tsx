import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addPost } from "../store/posts/postsActions";
import { selectPostsIsLoading } from "../store/posts/postsSlice";

export default function AddScreen() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectPostsIsLoading);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    dispatch(addPost({ title, body }));
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
      <Button onPress={handleSubmit} disabled={isLoading}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
