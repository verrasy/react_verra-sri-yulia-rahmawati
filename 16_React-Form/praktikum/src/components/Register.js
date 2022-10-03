import { useState, useRef } from "react";
import styles from "./Register.module.css";

export default function Register() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
    namaFileGambar: "",
  };

  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const [data, setData] = useState(baseData);
  const suratKesungguhan = useRef("");
  const regexNama = /^[A-Za-z ]*$/;
  const regexPNoHandphone = /^(\d{9,14})$/;
  const regexEmail = /^\S+@\S+\.\S+$/;
  const [errorMassage, setErrorMassage] = useState(baseError);

  const handleInputChange = (e) => {
    const newData = { ...data };
    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (name === "nama") {
      if (regexNama.test(value)) {
        setErrorMassage({ ...errorMassage, nama: "" });
      } else {
        setErrorMassage({
          ...errorMassage,
          nama: "Nama lengkap harus berupa huruf",
        });
      }
    } else if (name === "noHandphone") {
      if (regexPNoHandphone.test(value)) {
        setErrorMassage({ ...errorMassage, noHandphone: "" });
      } else {
        setErrorMassage({
          ...errorMassage,
          noHandphone:
            "Nomor handphone tidak sesuai harus terdiri dari 9 - 14 karakter",
        });
      }
    } else if (name === "email") {
      if (regexEmail.test(value)) {
        setErrorMassage({ ...errorMassage, email: "" });
      } else {
        setErrorMassage({ ...errorMassage, email: "Email Tidak Sesuai" });
      }
    }
    newData[name] = value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let namaFileGambar = suratKesungguhan.current.files[0].name;
    if (
      errorMassage.nama == "" &&
      errorMassage.email == "" &&
      errorMassage.noHandphone == ""
    ) {
      setData({ ...(data.namaFileGambar = namaFileGambar) });
      alert("Data Berhasil Dimasukan ");
      console.log(data);
      reset();
    } else {
      alert("Data Gagal Dimasukan ! Coba Lagi");
    }
  };

  const reset = () => {
    setData(baseData);
    setErrorMassage(baseError);
  };

  return (
    <>
      <div className={styles.Title}>
        <h1>Pendaftaran Peserta Coding Bootcamp</h1>
      </div>

      <div className={styles.Main}>
        <form action="" onSubmit={handleSubmit}>
          <label>Nama Lengkap : </label>
          <input
            type="text"
            name="nama"
            value={data.nama}
            onChange={handleInputChange}
            required
          />
          <span className={styles.Danger}>
            {errorMassage.nama != "" ? errorMassage.nama : ""}
          </span>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            required
          />
          <span className={styles.Danger}>
            {errorMassage.email != "" ? errorMassage.email : ""}
          </span>
          <label>No Handphone : </label>
          <input
            type="number"
            name="noHandphone"
            value={data.noHandphone}
            onChange={handleInputChange}
            required
          />
          <span className={styles.Danger}>
            {errorMassage.noHandphone != "" ? errorMassage.noHandphone : ""}
          </span>
          <label>Latar Belakang Pendidikan : </label>
          <input
            type="radio"
            name="pendidikan"
            value="IT"
            checked={data.pendidikan === "IT"}
            onChange={handleInputChange}
            required
          />{" "}
          IT
          <input
            type="radio"
            name="pendidikan"
            value="Non IT"
            checked={data.pendidikan === "Non IT"}
            onChange={handleInputChange}
            required
          />{" "}
          Non IT
          <label>Kelas Koding yang dipilih : </label>
          <select
            name="kelas"
            // value={data.kelas}
            defaultValue={"default"}
            onChange={handleInputChange}
            required
          >
            <option value={"default"} disabled>
              Pilih Salah Satu Program
            </option>
            <option value="Be a Top Search Quality Engineer">
              Be a Top Search Quality Engineer
            </option>
            <option value="From Beginner to Professional UI/UX Designer">
              From Beginner to Professional UI/UX Designer
            </option>
            <option value="How to be an Ideal Top Search ReactJS Front-End Engineer Program">
              How to be an Ideal Top Search ReactJS Front-End Engineer Program 
            </option>
            <option value="Mastering Flutter From Zero to Hero Engineer Program">
              Mastering Flutter From Zero to Hero Engineer Program
            </option>
            <option value="Mastering Golang Programming Engineer Program">
              Mastering Golang Programming Engineer Program
            </option>
          </select>
          <label>Foto Surat Kesungguhan : </label>
          <input type="file" ref={suratKesungguhan} required />
          <label>Harapan Untuk Coding Bootcamp ini : </label>
          <textarea
            name="harapan"
            value={data.harapan}
            onChange={handleInputChange}
          />
          <div>
            <input type="submit" className={styles.ButtonSubmit} required />
            <input
              type="reset"
              onClick={reset}
              className={styles.ButtonReset}
            />
          </div>
        </form>
      </div>
    </>
  );
}