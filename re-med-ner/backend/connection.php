<!-- Connecting to the database -->
<?php require_once("/home/rcasanova2/data/connect.php"); ?>
<?php header('Access-Control-Allow-Origin: http://localhost:3000/ '); ?>

<!-- Main -->
<?php


#region PREPARED STATEMENTS -------------------------------------------------------------------------
$select_results_by_phone = $connection->prepare("SELECT * FROM CustomersMedications WHERE phone_number = ?");

$insert_customer_record = $connection->prepare(
    "INSERT INTO CustomersMedications(first_name, last_name, phone_number, medication, email, amount_mg, frequency, time_of_administration, cycle_length_days) 
         VALUES(?,?,?,?,?,?,?,?,?)"
);

$select_by_id_sql = $connection->prepare("SELECT * FROM CustomersMedications WHERE customer_id = ?");
$update_customer_statement = $connection->prepare(
    "UPDATE CustomersMedications 
         SET first_name = ?, last_name = ?, phone_number = ?, medication = ?, email = ?, amount_mg = ?, frequency = ?, time_of_administration = ?, cycle_length_days = ? 
         WHERE customer_id = ?"
);
$delete_statement = $connection->prepare(
    "DELETE FROM CustomersMedications WHERE customer_id = ?"
);
#endregion


#region SQL METHODS ------------------------------------------------------------------------


function get_customer_by_phone($phone)
{
    global $connection;
    global $select_results_by_phone;


    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }


    $select_results_by_phone->bind_param("s", $phone);

    if (!$select_results_by_phone->execute()) {
        handle_database_error("Selecting Customer by Phone");
    }
    $result = $select_results_by_phone->get_result();
    $value = $result->fetch_assoc();
    return $value;
}

function insert_customer($first_name, $last_name, $phone_number, $medication, $email, $amount_mg, $frequency, $time_of_administration, $cycle_length_days)
{
    global $connection;
    global $insert_customer_record;
    $insert_customer_record->bind_param("sssssiisi", $first_name, $last_name, $phone_number, $medication, $email, $amount_mg, $frequency, $time_of_administration, $cycle_length_days);
    if (!$insert_customer_record->execute()) {
        handle_database_error("inserting attraction");
    }
}

function get_customer_by_id($customer_id)
{
    global $connection;
    global $select_by_id_sql;
    $select_by_id_sql->bind_param("i", $customer_id);
    if (!$select_by_id_sql->execute()) {
        handle_database_error("Selecting Customer by id");
    }

    $result = $select_by_id_sql->get_result();
    $customer = $result->fetch_assoc();
    return $customer;
}

function update_customer($first_name, $last_name, $phone_number, $medication, $email, $amount_mg, $frequency, $time_of_administration, $cycle_length_days, $customer_id)
{
    global $connection;
    global $update_customer_statement;

    $update_customer_statement->bind_param("sssssiisii", $first_name, $last_name, $phone_number, $medication, $email, $amount_mg, $frequency, $time_of_administration, $cycle_length_days, $customer_id);
    $update_customer_statement->execute();
    if (!$update_customer_statement->execute()) {
        handle_database_error("updating customer");
    }
}
function delete_customer_record($customer_id)
{
    global $connection;
    global $delete_statement;
    $delete_statement->bind_param("i", $customer_id);
    $delete_statement->execute();
    if (!$delete_statement->execute()) {
        handle_database_error("deleting customer");
    }
}



#endregion


#region ERROR HANDLING ---------------------------------------------------------------

function handle_database_error($statement)
{
    global $connection;
    die("Error in: " . $statement . ". Error Details: " . $connection->error);
}
#endregion


#region TO JAVASCRIPT -------------------------------------------------------
// Sending data back to React in JSON format

//Some PHP logic to process data
$customer = get_customer_by_phone("780.444.4444");

echo json_encode($customer);
#endregion
?>