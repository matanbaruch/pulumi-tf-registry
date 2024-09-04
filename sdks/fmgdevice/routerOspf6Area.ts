// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterOspf6Area extends pulumi.CustomResource {
    /**
     * Get an existing RouterOspf6Area resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterOspf6AreaState, opts?: pulumi.CustomResourceOptions): RouterOspf6Area {
        return new RouterOspf6Area(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/routerOspf6Area:RouterOspf6Area';

    /**
     * Returns true if the given object is an instance of RouterOspf6Area.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterOspf6Area {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterOspf6Area.__pulumiType;
    }

    public readonly authentication!: pulumi.Output<string>;
    public readonly defaultCost!: pulumi.Output<number>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<string | undefined>;
    public readonly ipsecAuthAlg!: pulumi.Output<string | undefined>;
    public readonly ipsecEncAlg!: pulumi.Output<string | undefined>;
    public readonly ipsecKeys!: pulumi.Output<outputs.RouterOspf6AreaIpsecKey[] | undefined>;
    public readonly keyRolloverInterval!: pulumi.Output<number>;
    public readonly nssaDefaultInformationOriginate!: pulumi.Output<string>;
    public readonly nssaDefaultInformationOriginateMetric!: pulumi.Output<number>;
    public readonly nssaDefaultInformationOriginateMetricType!: pulumi.Output<string>;
    public readonly nssaRedistribution!: pulumi.Output<string>;
    public readonly nssaTranslatorRole!: pulumi.Output<string>;
    public readonly ranges!: pulumi.Output<outputs.RouterOspf6AreaRange[] | undefined>;
    public readonly stubType!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly virtualLinks!: pulumi.Output<outputs.RouterOspf6AreaVirtualLink[] | undefined>;

    /**
     * Create a RouterOspf6Area resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterOspf6AreaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterOspf6AreaArgs | RouterOspf6AreaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterOspf6AreaState | undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["defaultCost"] = state ? state.defaultCost : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["ipsecAuthAlg"] = state ? state.ipsecAuthAlg : undefined;
            resourceInputs["ipsecEncAlg"] = state ? state.ipsecEncAlg : undefined;
            resourceInputs["ipsecKeys"] = state ? state.ipsecKeys : undefined;
            resourceInputs["keyRolloverInterval"] = state ? state.keyRolloverInterval : undefined;
            resourceInputs["nssaDefaultInformationOriginate"] = state ? state.nssaDefaultInformationOriginate : undefined;
            resourceInputs["nssaDefaultInformationOriginateMetric"] = state ? state.nssaDefaultInformationOriginateMetric : undefined;
            resourceInputs["nssaDefaultInformationOriginateMetricType"] = state ? state.nssaDefaultInformationOriginateMetricType : undefined;
            resourceInputs["nssaRedistribution"] = state ? state.nssaRedistribution : undefined;
            resourceInputs["nssaTranslatorRole"] = state ? state.nssaTranslatorRole : undefined;
            resourceInputs["ranges"] = state ? state.ranges : undefined;
            resourceInputs["stubType"] = state ? state.stubType : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["virtualLinks"] = state ? state.virtualLinks : undefined;
        } else {
            const args = argsOrState as RouterOspf6AreaArgs | undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["defaultCost"] = args ? args.defaultCost : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["ipsecAuthAlg"] = args ? args.ipsecAuthAlg : undefined;
            resourceInputs["ipsecEncAlg"] = args ? args.ipsecEncAlg : undefined;
            resourceInputs["ipsecKeys"] = args ? args.ipsecKeys : undefined;
            resourceInputs["keyRolloverInterval"] = args ? args.keyRolloverInterval : undefined;
            resourceInputs["nssaDefaultInformationOriginate"] = args ? args.nssaDefaultInformationOriginate : undefined;
            resourceInputs["nssaDefaultInformationOriginateMetric"] = args ? args.nssaDefaultInformationOriginateMetric : undefined;
            resourceInputs["nssaDefaultInformationOriginateMetricType"] = args ? args.nssaDefaultInformationOriginateMetricType : undefined;
            resourceInputs["nssaRedistribution"] = args ? args.nssaRedistribution : undefined;
            resourceInputs["nssaTranslatorRole"] = args ? args.nssaTranslatorRole : undefined;
            resourceInputs["ranges"] = args ? args.ranges : undefined;
            resourceInputs["stubType"] = args ? args.stubType : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["virtualLinks"] = args ? args.virtualLinks : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterOspf6Area.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterOspf6Area resources.
 */
export interface RouterOspf6AreaState {
    authentication?: pulumi.Input<string>;
    defaultCost?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<string>;
    ipsecAuthAlg?: pulumi.Input<string>;
    ipsecEncAlg?: pulumi.Input<string>;
    ipsecKeys?: pulumi.Input<pulumi.Input<inputs.RouterOspf6AreaIpsecKey>[]>;
    keyRolloverInterval?: pulumi.Input<number>;
    nssaDefaultInformationOriginate?: pulumi.Input<string>;
    nssaDefaultInformationOriginateMetric?: pulumi.Input<number>;
    nssaDefaultInformationOriginateMetricType?: pulumi.Input<string>;
    nssaRedistribution?: pulumi.Input<string>;
    nssaTranslatorRole?: pulumi.Input<string>;
    ranges?: pulumi.Input<pulumi.Input<inputs.RouterOspf6AreaRange>[]>;
    stubType?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    virtualLinks?: pulumi.Input<pulumi.Input<inputs.RouterOspf6AreaVirtualLink>[]>;
}

/**
 * The set of arguments for constructing a RouterOspf6Area resource.
 */
export interface RouterOspf6AreaArgs {
    authentication?: pulumi.Input<string>;
    defaultCost?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<string>;
    ipsecAuthAlg?: pulumi.Input<string>;
    ipsecEncAlg?: pulumi.Input<string>;
    ipsecKeys?: pulumi.Input<pulumi.Input<inputs.RouterOspf6AreaIpsecKey>[]>;
    keyRolloverInterval?: pulumi.Input<number>;
    nssaDefaultInformationOriginate?: pulumi.Input<string>;
    nssaDefaultInformationOriginateMetric?: pulumi.Input<number>;
    nssaDefaultInformationOriginateMetricType?: pulumi.Input<string>;
    nssaRedistribution?: pulumi.Input<string>;
    nssaTranslatorRole?: pulumi.Input<string>;
    ranges?: pulumi.Input<pulumi.Input<inputs.RouterOspf6AreaRange>[]>;
    stubType?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    virtualLinks?: pulumi.Input<pulumi.Input<inputs.RouterOspf6AreaVirtualLink>[]>;
}
