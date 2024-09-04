// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemSnmpCommunity extends pulumi.CustomResource {
    /**
     * Get an existing SystemSnmpCommunity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSnmpCommunityState, opts?: pulumi.CustomResourceOptions): SystemSnmpCommunity {
        return new SystemSnmpCommunity(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortianalyzer:index/systemSnmpCommunity:SystemSnmpCommunity';

    /**
     * Returns true if the given object is an instance of SystemSnmpCommunity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSnmpCommunity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSnmpCommunity.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly events!: pulumi.Output<string[]>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly hosts!: pulumi.Output<outputs.SystemSnmpCommunityHost[] | undefined>;
    public readonly hosts6s!: pulumi.Output<outputs.SystemSnmpCommunityHosts6[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly queryV1Port!: pulumi.Output<number>;
    public readonly queryV1Status!: pulumi.Output<string>;
    public readonly queryV2cPort!: pulumi.Output<number>;
    public readonly queryV2cStatus!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly trapV1Rport!: pulumi.Output<number>;
    public readonly trapV1Status!: pulumi.Output<string>;
    public readonly trapV2cRport!: pulumi.Output<number>;
    public readonly trapV2cStatus!: pulumi.Output<string>;

    /**
     * Create a SystemSnmpCommunity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSnmpCommunityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSnmpCommunityArgs | SystemSnmpCommunityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSnmpCommunityState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["events"] = state ? state.events : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["hosts"] = state ? state.hosts : undefined;
            resourceInputs["hosts6s"] = state ? state.hosts6s : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["queryV1Port"] = state ? state.queryV1Port : undefined;
            resourceInputs["queryV1Status"] = state ? state.queryV1Status : undefined;
            resourceInputs["queryV2cPort"] = state ? state.queryV2cPort : undefined;
            resourceInputs["queryV2cStatus"] = state ? state.queryV2cStatus : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["trapV1Rport"] = state ? state.trapV1Rport : undefined;
            resourceInputs["trapV1Status"] = state ? state.trapV1Status : undefined;
            resourceInputs["trapV2cRport"] = state ? state.trapV2cRport : undefined;
            resourceInputs["trapV2cStatus"] = state ? state.trapV2cStatus : undefined;
        } else {
            const args = argsOrState as SystemSnmpCommunityArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["hosts"] = args ? args.hosts : undefined;
            resourceInputs["hosts6s"] = args ? args.hosts6s : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["queryV1Port"] = args ? args.queryV1Port : undefined;
            resourceInputs["queryV1Status"] = args ? args.queryV1Status : undefined;
            resourceInputs["queryV2cPort"] = args ? args.queryV2cPort : undefined;
            resourceInputs["queryV2cStatus"] = args ? args.queryV2cStatus : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["trapV1Rport"] = args ? args.trapV1Rport : undefined;
            resourceInputs["trapV1Status"] = args ? args.trapV1Status : undefined;
            resourceInputs["trapV2cRport"] = args ? args.trapV2cRport : undefined;
            resourceInputs["trapV2cStatus"] = args ? args.trapV2cStatus : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSnmpCommunity.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSnmpCommunity resources.
 */
export interface SystemSnmpCommunityState {
    dynamicSortSubtable?: pulumi.Input<string>;
    events?: pulumi.Input<pulumi.Input<string>[]>;
    fosid?: pulumi.Input<number>;
    hosts?: pulumi.Input<pulumi.Input<inputs.SystemSnmpCommunityHost>[]>;
    hosts6s?: pulumi.Input<pulumi.Input<inputs.SystemSnmpCommunityHosts6>[]>;
    name?: pulumi.Input<string>;
    queryV1Port?: pulumi.Input<number>;
    queryV1Status?: pulumi.Input<string>;
    queryV2cPort?: pulumi.Input<number>;
    queryV2cStatus?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    trapV1Rport?: pulumi.Input<number>;
    trapV1Status?: pulumi.Input<string>;
    trapV2cRport?: pulumi.Input<number>;
    trapV2cStatus?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSnmpCommunity resource.
 */
export interface SystemSnmpCommunityArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    events?: pulumi.Input<pulumi.Input<string>[]>;
    fosid?: pulumi.Input<number>;
    hosts?: pulumi.Input<pulumi.Input<inputs.SystemSnmpCommunityHost>[]>;
    hosts6s?: pulumi.Input<pulumi.Input<inputs.SystemSnmpCommunityHosts6>[]>;
    name?: pulumi.Input<string>;
    queryV1Port?: pulumi.Input<number>;
    queryV1Status?: pulumi.Input<string>;
    queryV2cPort?: pulumi.Input<number>;
    queryV2cStatus?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    trapV1Rport?: pulumi.Input<number>;
    trapV1Status?: pulumi.Input<string>;
    trapV2cRport?: pulumi.Input<number>;
    trapV2cStatus?: pulumi.Input<string>;
}
