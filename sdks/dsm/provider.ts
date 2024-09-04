// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the dsm package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'dsm';

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

    public readonly acctId!: pulumi.Output<string | undefined>;
    public readonly apiKey!: pulumi.Output<string | undefined>;
    public readonly awsProfile!: pulumi.Output<string | undefined>;
    public readonly awsRegion!: pulumi.Output<string | undefined>;
    public readonly azureRegion!: pulumi.Output<string | undefined>;
    public readonly endpoint!: pulumi.Output<string | undefined>;
    public readonly ldapName!: pulumi.Output<string | undefined>;
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            resourceInputs["acctId"] = args ? args.acctId : undefined;
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["awsProfile"] = args ? args.awsProfile : undefined;
            resourceInputs["awsRegion"] = args ? args.awsRegion : undefined;
            resourceInputs["azureRegion"] = args ? args.azureRegion : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["insecure"] = pulumi.output(args ? args.insecure : undefined).apply(JSON.stringify);
            resourceInputs["ldapName"] = args ? args.ldapName : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["port"] = pulumi.output(args ? args.port : undefined).apply(JSON.stringify);
            resourceInputs["timeout"] = pulumi.output(args ? args.timeout : undefined).apply(JSON.stringify);
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    acctId?: pulumi.Input<string>;
    apiKey?: pulumi.Input<string>;
    awsProfile?: pulumi.Input<string>;
    awsRegion?: pulumi.Input<string>;
    azureRegion?: pulumi.Input<string>;
    endpoint?: pulumi.Input<string>;
    insecure?: pulumi.Input<boolean>;
    ldapName?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    timeout?: pulumi.Input<number>;
    username?: pulumi.Input<string>;
}
