import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";
import {
  FaAddressBook,
  FaUser,
  FaHeadphones,
  FaClock,
  FaCalendar,
  FaLocationArrow,
  FaStickyNote,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddEventPage() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(values).some(
      (element) => element === "" || !element
    );
    if (hasEmptyFields) {
      toast.error("All fields are required!");
      return;
    }

    const res = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })

    if (!res.ok) {
        console.error(res.error);
        toast.error(`Something went wrong`)
    } else {
        const data = await res.json();
        router.push(`/events/${data.slug}`)
    }
  };
  const handleInputChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Layout title="Add New Event">
      <ToastContainer position="bottom-center" />
      <Link href="/events">
        <a>Go Back</a>
      </Link>
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">
              <FaUser color="#4478e7" size="13px" /> Name:
            </label>
            <input
              type="text"
              value={values.name}
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="performers">
              <FaHeadphones color="#4478e7" size="13px" /> Performers:
            </label>
            <input
              type="text"
              value={values.performers}
              name="performers"
              id="performers"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="venue">
              <FaLocationArrow color="#4478e7" size="13px" /> Venue:
            </label>
            <input
              type="text"
              value={values.venue}
              name="venue"
              id="venue"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">
              <FaAddressBook color="#4478e7" size="13px" /> Address:
            </label>
            <input
              type="text"
              value={values.address}
              name="address"
              id="address"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">
              <FaCalendar color="#4478e7" size="13px" /> Date:
            </label>
            <input
              type="date"
              value={values.date}
              name="date"
              id="date"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="time">
              <FaClock color="#4478e7" size="13px" /> Time:
            </label>
            <input
              type="text"
              value={values.time}
              name="time"
              id="time"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">
            <FaStickyNote color="#4478e7" size="13px" /> Description:
          </label>
          <textarea
            name="description"
            id="description"
            onChange={handleInputChange}
            value={values.description}
          ></textarea>
        </div>
        <input type="submit" value="Add Event" className="btn" />
      </form>
    </Layout>
  );
}
