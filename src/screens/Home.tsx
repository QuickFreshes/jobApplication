import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import jobs from "../../assets/data/jobs";
import JobCard from "../components/JobCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [matchingJobs, setMatchingJobs] = useState(jobs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setMatchingJobs(jobs);
    } else {
      const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(query.toLowerCase())
      );
      setMatchingJobs(filteredJobs);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Jobs"
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      {matchingJobs.length > 0 ? (
        <FlatList
          data={matchingJobs}
          renderItem={({ item }) => <JobCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noDataText}>No data found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  searchContainer: {
    height: 50,
    marginBottom: 10,
  },
  searchInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    flex: 1,
    width: "100%",
  },
  noDataText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },
});

export default Home;
