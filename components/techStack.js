import styles from '../css/techStack.module.scss';
import Header from './header';
import Subtitle from './subtitle';


export default function TechStack() {
    return (
        <div className={styles.wrapper} id="teck-stack">
            <center>
                <Header>My Tech Stack</Header>
                <Subtitle> Technologies I’ve been working with recently </Subtitle>
            </center>

            <div className={styles.container}>
                <div className={styles.card}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" className={styles.image} />
                    <div className={styles.title}>Kubernetes</div>
                </div>

                <div className={styles.card}>
                    <img src="https://icons-for-free.com/iconfiles/png/512/Terraform-1329545833434920628.png" className={styles.image} />
                    <div className={styles.title}>Terraform</div>
                </div>

                <div className={styles.card}>
                    <img src="https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-274bm1xi.png" className={styles.image} />
                    <div className={styles.title}>AWS</div>
                </div>

                <div className={styles.card}>
                    <img src="https://coralogix.com/wp-content/uploads/2021/06/icon_cloud_192pt_clr-1.png" className={styles.image} />
                    <div className={styles.title}>GCP</div>
                </div>

                <div className={styles.card}>
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" className={styles.image} />
                    <div className={styles.title}>Docker</div>
                </div>

                <div className={styles.card}>
                    <img src="https://avatars.githubusercontent.com/u/44036562?s=280&v=4" className={styles.image} />
                    <div className={styles.title}>Github Actions</div>
                </div>

                <div className={styles.card}>
                    <img src="https://static-00.iconduck.com/assets.00/file-type-nginx-icon-1793x2048-yt5u3fm7.png" className={styles.image} />
                    <div className={styles.title}>Nginx</div>
                </div>

            </div>
        </div>
    )
}
