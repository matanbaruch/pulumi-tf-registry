// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the powermax package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'powermax';

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
     * IP or FQDN of the PowerMax host
     */
    public readonly endpoint!: pulumi.Output<string>;
    /**
     * The password of the PowerMax host.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The version of the PowerMax host.
     */
    public readonly pmaxVersion!: pulumi.Output<string>;
    /**
     * The serial_number of the PowerMax host.
     */
    public readonly serialNumber!: pulumi.Output<string>;
    /**
     * The username of the PowerMax host.
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
            if ((!args || args.pmaxVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pmaxVersion'");
            }
            if ((!args || args.serialNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serialNumber'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["insecure"] = pulumi.output(args ? args.insecure : undefined).apply(JSON.stringify);
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["pmaxVersion"] = args ? args.pmaxVersion : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
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
     * IP or FQDN of the PowerMax host
     */
    endpoint: pulumi.Input<string>;
    /**
     * Boolean variable to specify whether to validate SSL certificate or not.
     */
    insecure?: pulumi.Input<boolean>;
    /**
     * The password of the PowerMax host.
     */
    password: pulumi.Input<string>;
    /**
     * The version of the PowerMax host.
     */
    pmaxVersion: pulumi.Input<string>;
    /**
     * The serial_number of the PowerMax host.
     */
    serialNumber: pulumi.Input<string>;
    /**
     * The username of the PowerMax host.
     */
    username: pulumi.Input<string>;
}
