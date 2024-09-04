// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cacheforwardproxy extends pulumi.CustomResource {
    /**
     * Get an existing Cacheforwardproxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CacheforwardproxyState, opts?: pulumi.CustomResourceOptions): Cacheforwardproxy {
        return new Cacheforwardproxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/cacheforwardproxy:Cacheforwardproxy';

    /**
     * Returns true if the given object is an instance of Cacheforwardproxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cacheforwardproxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cacheforwardproxy.__pulumiType;
    }

    public readonly ipaddress!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;

    /**
     * Create a Cacheforwardproxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CacheforwardproxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CacheforwardproxyArgs | CacheforwardproxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CacheforwardproxyState | undefined;
            resourceInputs["ipaddress"] = state ? state.ipaddress : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
        } else {
            const args = argsOrState as CacheforwardproxyArgs | undefined;
            if ((!args || args.ipaddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipaddress'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["ipaddress"] = args ? args.ipaddress : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cacheforwardproxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cacheforwardproxy resources.
 */
export interface CacheforwardproxyState {
    ipaddress?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Cacheforwardproxy resource.
 */
export interface CacheforwardproxyArgs {
    ipaddress: pulumi.Input<string>;
    port: pulumi.Input<number>;
}
