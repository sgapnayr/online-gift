"use client";

import BaseAquarium from "../../components/BaseAquarium";

export default function Home() {
  return (
    <div style={styles.container}>
      <BaseAquarium />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    overflow: "hidden",
  },
};
