// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivateDnsARecord extends pulumi.CustomResource {
    /**
     * Get an existing PrivateDnsARecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateDnsARecordState, opts?: pulumi.CustomResourceOptions): PrivateDnsARecord {
        return new PrivateDnsARecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/privateDnsARecord:PrivateDnsARecord';

    /**
     * Returns true if the given object is an instance of PrivateDnsARecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateDnsARecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateDnsARecord.__pulumiType;
    }

    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly records!: pulumi.Output<string[]>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PrivateDnsARecordTimeouts | undefined>;
    public readonly ttl!: pulumi.Output<number>;
    public readonly zoneName!: pulumi.Output<string>;

    /**
     * Create a PrivateDnsARecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateDnsARecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateDnsARecordArgs | PrivateDnsARecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateDnsARecordState | undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["records"] = state ? state.records : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as PrivateDnsARecordArgs | undefined;
            if ((!args || args.records === undefined) && !opts.urn) {
                throw new Error("Missing required property 'records'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.ttl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ttl'");
            }
            if ((!args || args.zoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["records"] = args ? args.records : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
            resourceInputs["fqdn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateDnsARecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateDnsARecord resources.
 */
export interface PrivateDnsARecordState {
    fqdn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    records?: pulumi.Input<pulumi.Input<string>[]>;
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PrivateDnsARecordTimeouts>;
    ttl?: pulumi.Input<number>;
    zoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PrivateDnsARecord resource.
 */
export interface PrivateDnsARecordArgs {
    name?: pulumi.Input<string>;
    records: pulumi.Input<pulumi.Input<string>[]>;
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PrivateDnsARecordTimeouts>;
    ttl: pulumi.Input<number>;
    zoneName: pulumi.Input<string>;
}
