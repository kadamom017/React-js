import { useEffect, useState } from "react";
import "./App.css";

function App() {
  
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState([]);
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  
  useEffect(() => {
    const savedUsers = localStorage.getItem("Users");

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleHobby = (value) => {
    if (hobby.includes(value)) {
      setHobby(hobby.filter((item) => item !== value));
    } else {
      setHobby([...hobby, value]);
    }
  };



  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required.";
    } else if (username.length < 3) {
      newErrors.username =
        "Username must be at least 3 characters.";
    } else if (username.length > 20) {
      newErrors.username =
        "Username must not exceed 20 characters.";
    } else if (!/^[A-Za-z0-9_]+$/.test(username)) {
      newErrors.username =
        "Only letters, numbers and underscore are allowed.";
    }

    if (!about.trim()) {
      newErrors.about = "About is required.";
    } else if (about.trim().length < 30) {
      newErrors.about =
        "About must be at least 30 characters.";
    } else if (about.trim().length > 200) {
      newErrors.about =
        "About must not exceed 200 characters.";
    }

    if (!firstName.trim()) {
      newErrors.firstName =
        "First name is required.";
    } else if (!/^[A-Za-z ]+$/.test(firstName)) {
      newErrors.firstName =
        "First name can contain only letters.";
    } else if (firstName.trim().length < 2) {
      newErrors.firstName =
        "First name must be at least 2 characters.";
    }

    if (!lastName.trim()) {
      newErrors.lastName =
        "Last name is required.";
    } else if (!/^[A-Za-z ]+$/.test(lastName)) {
      newErrors.lastName =
        "Last name can contain only letters.";
    } else if (lastName.trim().length < 2) {
      newErrors.lastName =
        "Last name must be at least 2 characters.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password =
        "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    } else if (password.length > 16) {
      newErrors.password =
        "Password must not exceed 16 characters.";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password needs an uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password needs a lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password =
        "Password needs a number.";
    } else if (!/[!@#$%^&*_.-]/.test(password)) {
      newErrors.password =
        "Password needs a special character.";
    }

    if (!gender) {
      newErrors.gender =
        "Please select gender.";
    }

    if (hobby.length === 0) {
      newErrors.hobby =
        "Please select at least one hobby.";
    }

    if (!country) {
      newErrors.country =
        "Please select a country.";
    }

    if (!streetAddress.trim()) {
      newErrors.streetAddress =
        "Street address is required.";
    } else if (streetAddress.trim().length < 5) {
      newErrors.streetAddress =
        "Street address must be at least 5 characters.";
    }

    if (!city.trim()) {
      newErrors.city = "City is required.";
    } else if (!/^[A-Za-z ]+$/.test(city)) {
      newErrors.city =
        "City can contain only letters and spaces.";
    }

    if (!state.trim()) {
      newErrors.state = "State is required.";
    } else if (!/^[A-Za-z ]+$/.test(state)) {
      newErrors.state =
        "State can contain only letters and spaces.";
    }

    if (!pinCode.trim()) {
      newErrors.pinCode =
        "Pincode is required.";
    } else if (!/^\d{6}$/.test(pinCode)) {
      newErrors.pinCode =
        "Pincode must contain exactly 6 numbers.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setUsername("");
    setAbout("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setGender("");
    setHobby([]);
    setCountry("");
    setStreetAddress("");
    setCity("");
    setState("");
    setPinCode("");
    setErrors({});
    setEditId(null);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      return;
    }


    if (editId !== null) {
      const updatedUsers = users.map((user) => {
        if (user.id === editId) {
          return {
            ...user,
            username,
            about,
            firstName,
            lastName,
            email,
            password,
            gender,
            hobby,
            country,
            streetAddress,
            city,
            state,
            pinCode,
          };
        }

        return user;
      });

      setUsers(updatedUsers);

      localStorage.setItem(
        "Users",
        JSON.stringify(updatedUsers)
      );
    }


    else {
      const newUser = {
        id: Date.now(),
        username,
        about,
        firstName,
        lastName,
        email,
        password,
        gender,
        hobby,
        country,
        streetAddress,
        city,
        state,
        pinCode,
      };

      const updatedUsers = [
        ...users,
        newUser,
      ];

      setUsers(updatedUsers);

      localStorage.setItem(
        "Users",
        JSON.stringify(updatedUsers)
      );
    }

    resetForm();
    setCurrentPage(1);
  };

  
  const handleEdit = (user) => {
    setEditId(user.id);

    setUsername(user.username);
    setAbout(user.about);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setPassword(user.password);
    setGender(user.gender);
    setHobby(user.hobby || []);
    setCountry(user.country);
    setStreetAddress(user.streetAddress);
    setCity(user.city);
    setState(user.state);
    setPinCode(user.pinCode);

    setErrors({});

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "Users",
      JSON.stringify(updatedUsers)
    );

    if (
      currentPage > 1 &&
      paginatedUsers.length === 1
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredUsers = users.filter((user) => {
    const value = search.toLowerCase();

    return (
      user.username
        .toLowerCase()
        .includes(value) ||
      user.firstName
        .toLowerCase()
        .includes(value) ||
      user.lastName
        .toLowerCase()
        .includes(value) ||
      user.email
        .toLowerCase()
        .includes(value) ||
      user.gender
        .toLowerCase()
        .includes(value) ||
      user.country
        .toLowerCase()
        .includes(value) ||
      user.city
        .toLowerCase()
        .includes(value) ||
      user.state
        .toLowerCase()
        .includes(value)
    );
  });

 
  const sortedUsers = [...filteredUsers].sort(
    (a, b) => {
      let valueA = a[sortField];
      let valueB = b[sortField];

      if (Array.isArray(valueA)) {
        valueA = valueA.join("");
      }

      if (Array.isArray(valueB)) {
        valueB = valueB.join("");
      }

      if (
        typeof valueA === "string" &&
        typeof valueB === "string"
      ) {
        const result = valueA.localeCompare(
          valueB,
          undefined,
          {
            sensitivity: "base",
          }
        );

        return sortOrder === "asc"
          ? result
          : -result;
      }

      if (
        typeof valueA === "number" &&
        typeof valueB === "number"
      ) {
        return sortOrder === "asc"
          ? valueA - valueB
          : valueB - valueA;
      }

      return 0;
    }
  );

 
  const totalPages = Math.ceil(
    sortedUsers.length / usersPerPage
  );

  const startIndex =
    (currentPage - 1) * usersPerPage;

  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(
        sortOrder === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortField(field);
      setSortOrder("asc");
    }

    setCurrentPage(1);
  };

  const sortArrow = (field) => {
    if (sortField !== field) {
      return "↕";
    }

    return sortOrder === "asc"
      ? "↑"
      : "↓";
  };

  return (
    <div className="app">

      {}

      <header className="header">

        <div className="header-content">

          <div className="logo">
            <span className="logo-box">
              U
            </span>

            <div>
              <h1>UserHub</h1>
              <p>Management System</p>
            </div>
          </div>

          <div className="header-count">
            <span>Total Users</span>
            <strong>{users.length}</strong>
          </div>

        </div>

      </header>


      <main className="container">

        {}

        <section className="page-intro">

          <div>
            <p className="small-heading">
              USER REGISTRATION
            </p>

            <h2>
              Create User Profile
            </h2>

            <p>
              Add and manage user information
              from a single dashboard.
            </p>
          </div>

          {editId !== null && (
            <div className="editing-label">
              EDITING USER
            </div>
          )}

        </section>


        {}

        <form
          className="form-card"
          onSubmit={handleSubmit}
        >

          {}

          <section className="form-section">

            <div className="section-title">

              <div className="section-icon">
                01
              </div>

              <div>
                <h3>Personal Information</h3>

                <p>
                  Enter the user's basic details.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {}

              <div className="input-group">

                <label>
                  First Name <span>*</span>
                </label>

                <input
                  type="text"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(
                      e.target.value
                    )
                  }
                  placeholder="Enter first name"
                />

                {errors.firstName && (
                  <small className="error">
                    {errors.firstName}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  Last Name <span>*</span>
                </label>

                <input
                  type="text"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(
                      e.target.value
                    )
                  }
                  placeholder="Enter last name"
                />

                {errors.lastName && (
                  <small className="error">
                    {errors.lastName}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="example@gmail.com"
                />

                {errors.email && (
                  <small className="error">
                    {errors.email}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  Password <span>*</span>
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="Enter password"
                />

                {errors.password && (
                  <small className="error">
                    {errors.password}
                  </small>
                )}

              </div>

            </div>


            {}

            <div className="two-column-extra">

              <div className="input-group">

                <label>
                  Gender <span>*</span>
                </label>

                <div className="radio-list">

                  <label className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={
                        gender === "Male"
                      }
                      onChange={(e) =>
                        setGender(
                          e.target.value
                        )
                      }
                    />

                    <span>Male</span>
                  </label>

                  <label className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={
                        gender === "Female"
                      }
                      onChange={(e) =>
                        setGender(
                          e.target.value
                        )
                      }
                    />

                    <span>Female</span>
                  </label>

                </div>

                {errors.gender && (
                  <small className="error">
                    {errors.gender}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  Hobbies <span>*</span>
                </label>

                <div className="hobby-list">

                  {[
                    "Reading",
                    "Writing",
                    "Surfing",
                    "Travelling",
                    "Music",
                  ].map((item) => (

                    <label
                      className={
                        hobby.includes(item)
                          ? "hobby checked"
                          : "hobby"
                      }
                      key={item}
                    >

                      <input
                        type="checkbox"
                        value={item}
                        checked={hobby.includes(
                          item
                        )}
                        onChange={() =>
                          handleHobby(item)
                        }
                      />

                      <span>
                        {item}
                      </span>

                    </label>

                  ))}

                </div>

                {errors.hobby && (
                  <small className="error">
                    {errors.hobby}
                  </small>
                )}

              </div>

            </div>

          </section>


          {}

          <section className="form-section">

            <div className="section-title">

              <div className="section-icon">
                02
              </div>

              <div>
                <h3>Location Details</h3>

                <p>
                  Enter the user's address.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {}

              <div className="input-group">

                <label>
                  Country <span>*</span>
                </label>

                <select
                  value={country}
                  onChange={(e) =>
                    setCountry(
                      e.target.value
                    )
                  }
                >

                  <option value="">
                    Select country
                  </option>

                  <option value="India">
                    India
                  </option>

                  <option value="United States">
                    Russia
                  </option>

                  <option value="United Kingdom">
                    Germany
                  </option>

                  <option value="Canada">
                    Canada
                  </option>

                  <option value="Australia">
                    Switzerland
                  </option>

                </select>

                {errors.country && (
                  <small className="error">
                    {errors.country}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  Street Address <span>*</span>
                </label>

                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) =>
                    setStreetAddress(
                      e.target.value
                    )
                  }
                  placeholder="123 Main Street"
                />

                {errors.streetAddress && (
                  <small className="error">
                    {errors.streetAddress}
                  </small>
                )}

              </div>

            </div>


            <div className="location-grid">

              {}

              <div className="input-group">

                <label>
                  City <span>*</span>
                </label>

                <input
                  type="text"
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  placeholder="Enter city"
                />

                {errors.city && (
                  <small className="error">
                    {errors.city}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  State / Province <span>*</span>
                </label>

                <input
                  type="text"
                  value={state}
                  onChange={(e) =>
                    setState(e.target.value)
                  }
                  placeholder="Enter state"
                />

                {errors.state && (
                  <small className="error">
                    {errors.state}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  ZIP / Postal Code <span>*</span>
                </label>

                <input
                  type="text"
                  value={pinCode}
                  onChange={(e) =>
                    setPinCode(
                      e.target.value
                    )
                  }
                  placeholder="395001"
                />

                {errors.pinCode && (
                  <small className="error">
                    {errors.pinCode}
                  </small>
                )}

              </div>

            </div>

          </section>


          {}

          <section className="form-section">

            <div className="section-title">

              <div className="section-icon">
                03
              </div>

              <div>
                <h3>Public Profile</h3>

                <p>
                  Information displayed on the
                  user's profile.
                </p>
              </div>

            </div>


            <div className="profile-grid">

              {}

              <div className="input-group">

                <label>
                  Username <span>*</span>
                </label>

                <div className="username-field">

                  <span>@</span>

                  <input
                    type="text"
                    value={username}
                    onChange={(e) =>
                      setUsername(
                        e.target.value
                      )
                    }
                    placeholder="janesmith"
                  />

                </div>

                {errors.username && (
                  <small className="error">
                    {errors.username}
                  </small>
                )}

              </div>


              {}

              <div className="input-group">

                <label>
                  About <span>*</span>
                </label>

                <textarea
                  rows="4"
                  value={about}
                  onChange={(e) =>
                    setAbout(
                      e.target.value
                    )
                  }
                  placeholder="Write a few sentences about yourself."
                />

                <div className="counter">
                  {about.length}/200
                </div>

                {errors.about && (
                  <small className="error">
                    {errors.about}
                  </small>
                )}

              </div>

            </div>

          </section>


          {}

          <div className="form-actions">

            <button
              type="button"
              className="reset-button"
              onClick={resetForm}
            >
              Reset
            </button>

            <button
              type="submit"
              className="submit-button"
            >
              {editId !== null
                ? "Update User"
                : "Add User"}

              <span>→</span>
            </button>

          </div>

        </form>


        {}

        <section className="database">

          <div className="database-header">

            <div>

              <p className="small-heading">
                DATABASE
              </p>

              <h2>
                User Directory
              </h2>

              <p>
                View and manage all registered
                users.
              </p>

            </div>


            {}

            <div className="search-container">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => {
                  setSearch(
                    e.target.value
                  );

                  setCurrentPage(1);
                }}
              />

            </div>

          </div>


          {}

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th
                    onClick={() =>
                      handleSort("username")
                    }
                  >
                    USERNAME{" "}
                    <span>
                      {sortArrow(
                        "username"
                      )}
                    </span>
                  </th>

                  <th
                    onClick={() =>
                      handleSort("firstName")
                    }
                  >
                    NAME{" "}
                    <span>
                      {sortArrow(
                        "firstName"
                      )}
                    </span>
                  </th>

                  <th
                    onClick={() =>
                      handleSort("email")
                    }
                  >
                    EMAIL{" "}
                    <span>
                      {sortArrow("email")}
                    </span>
                  </th>

                  <th>
                    PASSWORD
                  </th>

                  <th
                    onClick={() =>
                      handleSort("gender")
                    }
                  >
                    GENDER{" "}
                    <span>
                      {sortArrow("gender")}
                    </span>
                  </th>

                  <th>
                    HOBBY
                  </th>

                  <th>
                    ADDRESS
                  </th>

                  <th
                    onClick={() =>
                      handleSort("state")
                    }
                  >
                    STATE{" "}
                    <span>
                      {sortArrow("state")}
                    </span>
                  </th>

                  <th
                    onClick={() =>
                      handleSort("country")
                    }
                  >
                    COUNTRY{" "}
                    <span>
                      {sortArrow(
                        "country"
                      )}
                    </span>
                  </th>

                  <th>
                    ACTION
                  </th>

                </tr>

              </thead>


              <tbody>

                {paginatedUsers.length ===
                0 ? (

                  <tr>

                    <td
                      colSpan="10"
                      className="no-users"
                    >
                      No users found
                    </td>

                  </tr>

                ) : (

                  paginatedUsers.map(
                    (user) => (

                      <tr key={user.id}>

                        <td>

                          <strong className="username">
                            @{user.username}
                          </strong>

                        </td>


                        <td>
                          {user.firstName}{" "}
                          {user.lastName}
                        </td>


                        <td>
                          {user.email}
                        </td>


                        <td>
                          ••••••••
                        </td>


                        <td>
                          {user.gender}
                        </td>


                        <td>
                          {user.hobby.join(
                            ", "
                          )}
                        </td>


                        <td>
                          {user.streetAddress},{" "}
                          {user.city}
                        </td>


                        <td>
                          {user.state}
                        </td>


                        <td>
                          {user.country}
                        </td>


                        <td>

                          <div className="actions">

                            <button
                              className="edit"
                              onClick={() =>
                                handleEdit(
                                  user
                                )
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="delete"
                              onClick={() =>
                                handleDelete(
                                  user.id
                                )
                              }
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>


          {}

          <div className="pagination">

            <span className="showing">

              Showing{" "}
              {sortedUsers.length === 0
                ? 0
                : startIndex + 1}{" "}

              to{" "}

              {Math.min(
                startIndex +
                  usersPerPage,
                sortedUsers.length
              )}{" "}

              of {sortedUsers.length}

            </span>


            <div className="page-controls">

              <button
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  setCurrentPage(
                    currentPage - 1
                  )
                }
              >
                Previous
              </button>


              <span className="page-number">

                {totalPages === 0
                  ? 0
                  : currentPage}

              </span>


              <button
                disabled={
                  currentPage >=
                    totalPages ||
                  totalPages === 0
                }
                onClick={() =>
                  setCurrentPage(
                    currentPage + 1
                  )
                }
              >
                Next
              </button>

            </div>

          </div>

        </section>


        <footer>
          UserHub · User Management System
        </footer>

      </main>

    </div>
  );
}

export default App;