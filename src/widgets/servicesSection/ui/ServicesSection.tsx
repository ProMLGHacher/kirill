import { ServiceCard } from '@/entities/service'

export const ServicesSection = () => {

    return (
        <section className="container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            <ServiceCard index={1} service={{ id: '1', name: 'Service 1', price: 100, cover: 'https://s3-alpha-sig.figma.com/img/ad9a/373d/e023a361a31a11ca4b8d77d59429248f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJNr7fDv4NGcU8mpOtXwDTpO1GTYyHSvgdlB~eo5w48ClQdv7sk3PWeQSMBS6dg01PQ-ngj3D2T~wmbbiYxwYiMR0t0s94620cOr16fJeMv~AgbVxGT0798waz09V7I2o5rbKaBYTZOeoRS56~ZfT927t4Bs5QULwQOqVMm4eiCBL9GxN8UpVSXu4aZeZSqE9pQQIZQSo9TU8cksLlEJgL42QIHTk0V6kf8Beq-rjF71AYaIdlzqwh8RDmYjChgXVsaL31h3Zhw0ZvLI3gunOaXE2E7p6eS4Pd39wWSoa1wegrMbcfFNYV-O3hfpFtSW5AZ4qo1pXV7h6FzIF7DlPA__' }} />
            <ServiceCard index={2} service={{ id: '1', name: 'Service 1', price: 100, cover: 'https://s3-alpha-sig.figma.com/img/ad9a/373d/e023a361a31a11ca4b8d77d59429248f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJNr7fDv4NGcU8mpOtXwDTpO1GTYyHSvgdlB~eo5w48ClQdv7sk3PWeQSMBS6dg01PQ-ngj3D2T~wmbbiYxwYiMR0t0s94620cOr16fJeMv~AgbVxGT0798waz09V7I2o5rbKaBYTZOeoRS56~ZfT927t4Bs5QULwQOqVMm4eiCBL9GxN8UpVSXu4aZeZSqE9pQQIZQSo9TU8cksLlEJgL42QIHTk0V6kf8Beq-rjF71AYaIdlzqwh8RDmYjChgXVsaL31h3Zhw0ZvLI3gunOaXE2E7p6eS4Pd39wWSoa1wegrMbcfFNYV-O3hfpFtSW5AZ4qo1pXV7h6FzIF7DlPA__' }} />
            <ServiceCard index={3} service={{ id: '1', name: 'Service 1', price: 100, cover: 'https://s3-alpha-sig.figma.com/img/ad9a/373d/e023a361a31a11ca4b8d77d59429248f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJNr7fDv4NGcU8mpOtXwDTpO1GTYyHSvgdlB~eo5w48ClQdv7sk3PWeQSMBS6dg01PQ-ngj3D2T~wmbbiYxwYiMR0t0s94620cOr16fJeMv~AgbVxGT0798waz09V7I2o5rbKaBYTZOeoRS56~ZfT927t4Bs5QULwQOqVMm4eiCBL9GxN8UpVSXu4aZeZSqE9pQQIZQSo9TU8cksLlEJgL42QIHTk0V6kf8Beq-rjF71AYaIdlzqwh8RDmYjChgXVsaL31h3Zhw0ZvLI3gunOaXE2E7p6eS4Pd39wWSoa1wegrMbcfFNYV-O3hfpFtSW5AZ4qo1pXV7h6FzIF7DlPA__' }} />
        </section>
    )
}
