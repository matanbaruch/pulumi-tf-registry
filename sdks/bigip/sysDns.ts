// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SysDns extends pulumi.CustomResource {
    /**
     * Get an existing SysDns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SysDnsState, opts?: pulumi.CustomResourceOptions): SysDns {
        return new SysDns(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bigip:index/sysDns:SysDns';

    /**
     * Returns true if the given object is an instance of SysDns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SysDns {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SysDns.__pulumiType;
    }

    /**
     * User defined description
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Specifies the name servers that the system uses to validate DNS lookups, and resolve host names
     */
    public readonly nameServers!: pulumi.Output<string[]>;
    /**
     * how many DNS Servers
     */
    public readonly numberOfDots!: pulumi.Output<number>;
    /**
     * Specifies the domains that the system searches for local domain lookups, to resolve local host names
     */
    public readonly searches!: pulumi.Output<string[] | undefined>;

    /**
     * Create a SysDns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SysDnsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SysDnsArgs | SysDnsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SysDnsState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["nameServers"] = state ? state.nameServers : undefined;
            resourceInputs["numberOfDots"] = state ? state.numberOfDots : undefined;
            resourceInputs["searches"] = state ? state.searches : undefined;
        } else {
            const args = argsOrState as SysDnsArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.nameServers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nameServers'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["nameServers"] = args ? args.nameServers : undefined;
            resourceInputs["numberOfDots"] = args ? args.numberOfDots : undefined;
            resourceInputs["searches"] = args ? args.searches : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SysDns.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SysDns resources.
 */
export interface SysDnsState {
    /**
     * User defined description
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name servers that the system uses to validate DNS lookups, and resolve host names
     */
    nameServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * how many DNS Servers
     */
    numberOfDots?: pulumi.Input<number>;
    /**
     * Specifies the domains that the system searches for local domain lookups, to resolve local host names
     */
    searches?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SysDns resource.
 */
export interface SysDnsArgs {
    /**
     * User defined description
     */
    description: pulumi.Input<string>;
    /**
     * Specifies the name servers that the system uses to validate DNS lookups, and resolve host names
     */
    nameServers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * how many DNS Servers
     */
    numberOfDots?: pulumi.Input<number>;
    /**
     * Specifies the domains that the system searches for local domain lookups, to resolve local host names
     */
    searches?: pulumi.Input<pulumi.Input<string>[]>;
}
