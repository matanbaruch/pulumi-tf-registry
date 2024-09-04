// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the prismacloud-waas package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'prismacloud-waas';

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
     * Version of the Prisma Cloud API
     */
    public readonly apiVersion!: pulumi.Output<string | undefined>;
    /**
     * URL of the Prisma Cloud Console
     */
    public readonly consoleUrl!: pulumi.Output<string>;
    /**
     * Prisma Cloud Compute password
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Project for multi-tenant environments
     */
    public readonly project!: pulumi.Output<string | undefined>;
    /**
     * Prisma Cloud Compute username
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
            if ((!args || args.consoleUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consoleUrl'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["apiVersion"] = args ? args.apiVersion : undefined;
            resourceInputs["consoleUrl"] = args ? args.consoleUrl : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["skipCertVerification"] = pulumi.output(args ? args.skipCertVerification : undefined).apply(JSON.stringify);
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
     * Version of the Prisma Cloud API
     */
    apiVersion?: pulumi.Input<string>;
    /**
     * URL of the Prisma Cloud Console
     */
    consoleUrl: pulumi.Input<string>;
    /**
     * Prisma Cloud Compute password
     */
    password: pulumi.Input<string>;
    /**
     * Project for multi-tenant environments
     */
    project?: pulumi.Input<string>;
    /**
     * If true, skip certificate verification
     */
    skipCertVerification?: pulumi.Input<boolean>;
    /**
     * Prisma Cloud Compute username
     */
    username: pulumi.Input<string>;
}
