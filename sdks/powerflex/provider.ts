// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the powerflex package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'powerflex';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    /**
     * The PowerFlex Gateway server URL (inclusive of the port).
     */
    public readonly endpoint!: pulumi.Output<string>;
    /**
     * The password required for the authentication.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The username required for authentication.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            if ((!args || args.endpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpoint'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["insecure"] = pulumi.output(args ? args.insecure : undefined).apply(JSON.stringify);
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["timeout"] = pulumi.output(args ? args.timeout : undefined).apply(JSON.stringify);
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The PowerFlex Gateway server URL (inclusive of the port).
     */
    endpoint: pulumi.Input<string>;
    /**
     * Specifies if the user wants to skip SSL verification.
     */
    insecure?: pulumi.Input<boolean>;
    /**
     * The password required for the authentication.
     */
    password: pulumi.Input<string>;
    /**
     * HTTPS timeout.
     */
    timeout?: pulumi.Input<number>;
    /**
     * The username required for authentication.
     */
    username: pulumi.Input<string>;
}
