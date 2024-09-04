// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the lumen package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'lumen';

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
     * Lumen customer account number (required for new versions of bare metal resources/data sources)
     */
    public readonly accountNumber!: pulumi.Output<string>;
    /**
     * Consumer key for Lumen API
     */
    public readonly consumerKey!: pulumi.Output<string>;
    /**
     * Consumer secret for Lumen API
     */
    public readonly consumerSecret!: pulumi.Output<string>;

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
            if ((!args || args.accountNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountNumber'");
            }
            if ((!args || args.consumerKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerKey'");
            }
            if ((!args || args.consumerSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerSecret'");
            }
            resourceInputs["accountNumber"] = args?.accountNumber ? pulumi.secret(args.accountNumber) : undefined;
            resourceInputs["consumerKey"] = args?.consumerKey ? pulumi.secret(args.consumerKey) : undefined;
            resourceInputs["consumerSecret"] = args?.consumerSecret ? pulumi.secret(args.consumerSecret) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accountNumber", "consumerKey", "consumerSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Lumen customer account number (required for new versions of bare metal resources/data sources)
     */
    accountNumber: pulumi.Input<string>;
    /**
     * Consumer key for Lumen API
     */
    consumerKey: pulumi.Input<string>;
    /**
     * Consumer secret for Lumen API
     */
    consumerSecret: pulumi.Input<string>;
}
