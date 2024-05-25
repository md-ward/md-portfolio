const POST = async (req: Request) => {
    const { name, password } = await req.json();
    console.log(name, password);
}