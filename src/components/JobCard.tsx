import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  experience: string | number;
  skills: string;
  description: string;
};

interface Props {
  item: Job;
}

const JobCard = ({ item }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.company}>{item?.company}</Text>
      <Text style={styles.description}>{item?.description}</Text>
      <Text style={styles.skills}>{item?.skills}</Text>
      <Text style={styles.experience}>
        {item?.experience} years of experience required
      </Text>
      <TouchableOpacity style={styles.applyButton} onPress={toggleModal}>
        <Text style={styles.applyButtonText}>Apply for Job</Text>
      </TouchableOpacity>
      <Modal visible={showModal} onRequestClose={toggleModal}>
        <View style={styles.modal}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.company}>{item?.company}</Text>
          <Text style={styles.description}>{item?.description}</Text>
          <Text style={styles.skills}>{item?.skills}</Text>
          <Text style={styles.experience}>
            {item?.experience} years of experience required
          </Text>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  company: {
    fontSize: 18,
    fontStyle: "italic",
    marginTop: 5,
  },
  description: {
    marginTop: 10,
  },
  skills: {
    marginTop: 10,
    fontWeight: "bold",
  },
  experience: {
    marginTop: 10,
    fontStyle: "italic",
  },
  applyButton: {
    backgroundColor: "#007aff",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#007aff",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
