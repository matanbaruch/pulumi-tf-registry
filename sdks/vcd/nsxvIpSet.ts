// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NsxvIpSet extends pulumi.CustomResource {
    /**
     * Get an existing NsxvIpSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsxvIpSetState, opts?: pulumi.CustomResourceOptions): NsxvIpSet {
        return new NsxvIpSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcd:index/nsxvIpSet:NsxvIpSet';

    /**
     * Returns true if the given object is an instance of NsxvIpSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NsxvIpSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NsxvIpSet.__pulumiType;
    }

    /**
     * IP set description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A set of IP address, CIDR, IP range objects
     */
    public readonly ipAddresses!: pulumi.Output<string[]>;
    /**
     * Allows visibility in underlying scopes (Default is true)
     */
    public readonly isInheritanceAllowed!: pulumi.Output<boolean | undefined>;
    /**
     * IP set name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    public readonly org!: pulumi.Output<string | undefined>;
    /**
     * The name of VDC to use, optional if defined at provider level
     */
    public readonly vdc!: pulumi.Output<string | undefined>;

    /**
     * Create a NsxvIpSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NsxvIpSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsxvIpSetArgs | NsxvIpSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsxvIpSetState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipAddresses"] = state ? state.ipAddresses : undefined;
            resourceInputs["isInheritanceAllowed"] = state ? state.isInheritanceAllowed : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["org"] = state ? state.org : undefined;
            resourceInputs["vdc"] = state ? state.vdc : undefined;
        } else {
            const args = argsOrState as NsxvIpSetArgs | undefined;
            if ((!args || args.ipAddresses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddresses'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipAddresses"] = args ? args.ipAddresses : undefined;
            resourceInputs["isInheritanceAllowed"] = args ? args.isInheritanceAllowed : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["org"] = args ? args.org : undefined;
            resourceInputs["vdc"] = args ? args.vdc : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NsxvIpSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NsxvIpSet resources.
 */
export interface NsxvIpSetState {
    /**
     * IP set description
     */
    description?: pulumi.Input<string>;
    /**
     * A set of IP address, CIDR, IP range objects
     */
    ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows visibility in underlying scopes (Default is true)
     */
    isInheritanceAllowed?: pulumi.Input<boolean>;
    /**
     * IP set name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
    /**
     * The name of VDC to use, optional if defined at provider level
     */
    vdc?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NsxvIpSet resource.
 */
export interface NsxvIpSetArgs {
    /**
     * IP set description
     */
    description?: pulumi.Input<string>;
    /**
     * A set of IP address, CIDR, IP range objects
     */
    ipAddresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows visibility in underlying scopes (Default is true)
     */
    isInheritanceAllowed?: pulumi.Input<boolean>;
    /**
     * IP set name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
    /**
     * The name of VDC to use, optional if defined at provider level
     */
    vdc?: pulumi.Input<string>;
}
