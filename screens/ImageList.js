import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { supabase } from "../utils";

const ImageList = () => {
  const getImages = async () => {
    const { data, error } = await supabase.storage.from("snaps-bucket").list({
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });
    console.log(data, error);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <View>
      <Text>ImageList</Text>
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({});
