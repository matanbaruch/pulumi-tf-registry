// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AaaaRecordSet extends pulumi.CustomResource {
    /**
     * Get an existing AaaaRecordSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AaaaRecordSetState, opts?: pulumi.CustomResourceOptions): AaaaRecordSet {
        return new AaaaRecordSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dns:index/aaaaRecordSet:AaaaRecordSet';

    /**
     * Returns true if the given object is an instance of AaaaRecordSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AaaaRecordSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AaaaRecordSet.__pulumiType;
    }

    /**
     * The IPv6 addresses this record set will point to.
     */
    public readonly addresses!: pulumi.Output<string[]>;
    /**
     * The name of the record set. The `zone` argument will be appended to this value to create the full record path.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The TTL of the record set. Defaults to `3600`.
     */
    public readonly ttl!: pulumi.Output<number | undefined>;
    /**
     * DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a AaaaRecordSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AaaaRecordSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AaaaRecordSetArgs | AaaaRecordSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AaaaRecordSetState | undefined;
            resourceInputs["addresses"] = state ? state.addresses : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as AaaaRecordSetArgs | undefined;
            if ((!args || args.addresses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addresses'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["addresses"] = args ? args.addresses : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AaaaRecordSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AaaaRecordSet resources.
 */
export interface AaaaRecordSetState {
    /**
     * The IPv6 addresses this record set will point to.
     */
    addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the record set. The `zone` argument will be appended to this value to create the full record path.
     */
    name?: pulumi.Input<string>;
    /**
     * The TTL of the record set. Defaults to `3600`.
     */
    ttl?: pulumi.Input<number>;
    /**
     * DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AaaaRecordSet resource.
 */
export interface AaaaRecordSetArgs {
    /**
     * The IPv6 addresses this record set will point to.
     */
    addresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the record set. The `zone` argument will be appended to this value to create the full record path.
     */
    name?: pulumi.Input<string>;
    /**
     * The TTL of the record set. Defaults to `3600`.
     */
    ttl?: pulumi.Input<number>;
    /**
     * DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.
     */
    zone: pulumi.Input<string>;
}
