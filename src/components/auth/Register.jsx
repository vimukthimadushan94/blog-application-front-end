export default function Register(){
    return(
        <>
            <div className="col-md-8">
                <h3>Login</h3>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">First Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="First Name"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Last Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Age</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Age"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Email"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </>
    );
}