import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastProductDataBase from './LastProductDataBase';
import LastUserDataBase from './LastUserDataBase';
import LastCartDataBase from './LastCartDataBase';
import GenresInDb from './GenresInDb';


function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<div className="row">

					{/*<!-- Movies in Data Base -->*/}
					<ContentRowMovies />

				</div>
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<LastProductDataBase />
					<LastUserDataBase />
					<GenresInDb />
					<LastCartDataBase />
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;