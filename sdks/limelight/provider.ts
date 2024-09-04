// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the limelight package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'limelight';

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
     * The API key to be used for authenticating with the Limelight Networks Configuration API
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * The base URL for the Limelight Networks Configuration API (trailing / should be omitted)
     */
    public readonly configApiBaseUrl!: pulumi.Output<string | undefined>;
    /**
     * The base URL for the Limelight Networks EdgeFunctions API (trailing / should be omitted)
     */
    public readonly edgefunctionsApiBaseUrl!: pulumi.Output<string | undefined>;
    /**
     * The username to be used for authenticating with the Limelight Networks Configuration API
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
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["configApiBaseUrl"] = args ? args.configApiBaseUrl : undefined;
            resourceInputs["edgefunctionsApiBaseUrl"] = args ? args.edgefunctionsApiBaseUrl : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The API key to be used for authenticating with the Limelight Networks Configuration API
     */
    apiKey: pulumi.Input<string>;
    /**
     * The base URL for the Limelight Networks Configuration API (trailing / should be omitted)
     */
    configApiBaseUrl?: pulumi.Input<string>;
    /**
     * The base URL for the Limelight Networks EdgeFunctions API (trailing / should be omitted)
     */
    edgefunctionsApiBaseUrl?: pulumi.Input<string>;
    /**
     * The username to be used for authenticating with the Limelight Networks Configuration API
     */
    username: pulumi.Input<string>;
}
