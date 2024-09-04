// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DnsTransferAcceptV2 extends pulumi.CustomResource {
    /**
     * Get an existing DnsTransferAcceptV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsTransferAcceptV2State, opts?: pulumi.CustomResourceOptions): DnsTransferAcceptV2 {
        return new DnsTransferAcceptV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/dnsTransferAcceptV2:DnsTransferAcceptV2';

    /**
     * Returns true if the given object is an instance of DnsTransferAcceptV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsTransferAcceptV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsTransferAcceptV2.__pulumiType;
    }

    public readonly disableStatusCheck!: pulumi.Output<boolean | undefined>;
    public readonly key!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DnsTransferAcceptV2Timeouts | undefined>;
    public readonly valueSpecs!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly zoneTransferRequestId!: pulumi.Output<string>;

    /**
     * Create a DnsTransferAcceptV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsTransferAcceptV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnsTransferAcceptV2Args | DnsTransferAcceptV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnsTransferAcceptV2State | undefined;
            resourceInputs["disableStatusCheck"] = state ? state.disableStatusCheck : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["valueSpecs"] = state ? state.valueSpecs : undefined;
            resourceInputs["zoneTransferRequestId"] = state ? state.zoneTransferRequestId : undefined;
        } else {
            const args = argsOrState as DnsTransferAcceptV2Args | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.zoneTransferRequestId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneTransferRequestId'");
            }
            resourceInputs["disableStatusCheck"] = args ? args.disableStatusCheck : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["valueSpecs"] = args ? args.valueSpecs : undefined;
            resourceInputs["zoneTransferRequestId"] = args ? args.zoneTransferRequestId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DnsTransferAcceptV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DnsTransferAcceptV2 resources.
 */
export interface DnsTransferAcceptV2State {
    disableStatusCheck?: pulumi.Input<boolean>;
    key?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DnsTransferAcceptV2Timeouts>;
    valueSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    zoneTransferRequestId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DnsTransferAcceptV2 resource.
 */
export interface DnsTransferAcceptV2Args {
    disableStatusCheck?: pulumi.Input<boolean>;
    key: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DnsTransferAcceptV2Timeouts>;
    valueSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    zoneTransferRequestId: pulumi.Input<string>;
}
