import Button from "@/shared/ui/Button/Button"
import Input from "@/shared/ui/Input/Input"
import Select from "@/shared/ui/Select/Select"


const Main = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
            <Button variant="primary">
                Subscribe
            </Button>
            <Input placeholder="Hello world" />
            <Select width="200px" options={[
                {
                    label: '1',
                    value: 1
                },
                {
                    label: '2',
                    value: 2
                },
                {
                    label: '3',
                    value: 3
                }
            ]} />
        </div>
    )
}

export default Main
