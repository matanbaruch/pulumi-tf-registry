// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApplicationObject extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationObjectState, opts?: pulumi.CustomResourceOptions): ApplicationObject {
        return new ApplicationObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/applicationObject:ApplicationObject';

    /**
     * Returns true if the given object is an instance of ApplicationObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationObject.__pulumiType;
    }

    public readonly ableToFileTransfer!: pulumi.Output<boolean | undefined>;
    public readonly algDisableCapability!: pulumi.Output<string | undefined>;
    public readonly category!: pulumi.Output<string>;
    public readonly continueScanningForOtherApplications!: pulumi.Output<boolean | undefined>;
    public readonly defaults!: pulumi.Output<outputs.ApplicationObjectDefaults | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The device group.
     */
    public readonly deviceGroup!: pulumi.Output<string | undefined>;
    public readonly evasiveBehavior!: pulumi.Output<boolean | undefined>;
    public readonly excessiveBandwidth!: pulumi.Output<boolean | undefined>;
    public readonly hasKnownVulnerability!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly noAppIdCaching!: pulumi.Output<boolean | undefined>;
    public readonly parentApp!: pulumi.Output<string | undefined>;
    public readonly pervasiveUse!: pulumi.Output<boolean | undefined>;
    public readonly proneToMisuse!: pulumi.Output<boolean | undefined>;
    public readonly risk!: pulumi.Output<number | undefined>;
    public readonly scanning!: pulumi.Output<outputs.ApplicationObjectScanning | undefined>;
    public readonly subcategory!: pulumi.Output<string>;
    public readonly technology!: pulumi.Output<string>;
    public readonly timeoutSettings!: pulumi.Output<outputs.ApplicationObjectTimeoutSettings | undefined>;
    public readonly tunnelsOtherApplications!: pulumi.Output<boolean | undefined>;
    public readonly usedByMalware!: pulumi.Output<boolean | undefined>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a ApplicationObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationObjectArgs | ApplicationObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationObjectState | undefined;
            resourceInputs["ableToFileTransfer"] = state ? state.ableToFileTransfer : undefined;
            resourceInputs["algDisableCapability"] = state ? state.algDisableCapability : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["continueScanningForOtherApplications"] = state ? state.continueScanningForOtherApplications : undefined;
            resourceInputs["defaults"] = state ? state.defaults : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceGroup"] = state ? state.deviceGroup : undefined;
            resourceInputs["evasiveBehavior"] = state ? state.evasiveBehavior : undefined;
            resourceInputs["excessiveBandwidth"] = state ? state.excessiveBandwidth : undefined;
            resourceInputs["hasKnownVulnerability"] = state ? state.hasKnownVulnerability : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["noAppIdCaching"] = state ? state.noAppIdCaching : undefined;
            resourceInputs["parentApp"] = state ? state.parentApp : undefined;
            resourceInputs["pervasiveUse"] = state ? state.pervasiveUse : undefined;
            resourceInputs["proneToMisuse"] = state ? state.proneToMisuse : undefined;
            resourceInputs["risk"] = state ? state.risk : undefined;
            resourceInputs["scanning"] = state ? state.scanning : undefined;
            resourceInputs["subcategory"] = state ? state.subcategory : undefined;
            resourceInputs["technology"] = state ? state.technology : undefined;
            resourceInputs["timeoutSettings"] = state ? state.timeoutSettings : undefined;
            resourceInputs["tunnelsOtherApplications"] = state ? state.tunnelsOtherApplications : undefined;
            resourceInputs["usedByMalware"] = state ? state.usedByMalware : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as ApplicationObjectArgs | undefined;
            if ((!args || args.category === undefined) && !opts.urn) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.subcategory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subcategory'");
            }
            if ((!args || args.technology === undefined) && !opts.urn) {
                throw new Error("Missing required property 'technology'");
            }
            resourceInputs["ableToFileTransfer"] = args ? args.ableToFileTransfer : undefined;
            resourceInputs["algDisableCapability"] = args ? args.algDisableCapability : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["continueScanningForOtherApplications"] = args ? args.continueScanningForOtherApplications : undefined;
            resourceInputs["defaults"] = args ? args.defaults : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceGroup"] = args ? args.deviceGroup : undefined;
            resourceInputs["evasiveBehavior"] = args ? args.evasiveBehavior : undefined;
            resourceInputs["excessiveBandwidth"] = args ? args.excessiveBandwidth : undefined;
            resourceInputs["hasKnownVulnerability"] = args ? args.hasKnownVulnerability : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["noAppIdCaching"] = args ? args.noAppIdCaching : undefined;
            resourceInputs["parentApp"] = args ? args.parentApp : undefined;
            resourceInputs["pervasiveUse"] = args ? args.pervasiveUse : undefined;
            resourceInputs["proneToMisuse"] = args ? args.proneToMisuse : undefined;
            resourceInputs["risk"] = args ? args.risk : undefined;
            resourceInputs["scanning"] = args ? args.scanning : undefined;
            resourceInputs["subcategory"] = args ? args.subcategory : undefined;
            resourceInputs["technology"] = args ? args.technology : undefined;
            resourceInputs["timeoutSettings"] = args ? args.timeoutSettings : undefined;
            resourceInputs["tunnelsOtherApplications"] = args ? args.tunnelsOtherApplications : undefined;
            resourceInputs["usedByMalware"] = args ? args.usedByMalware : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationObject resources.
 */
export interface ApplicationObjectState {
    ableToFileTransfer?: pulumi.Input<boolean>;
    algDisableCapability?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    continueScanningForOtherApplications?: pulumi.Input<boolean>;
    defaults?: pulumi.Input<inputs.ApplicationObjectDefaults>;
    description?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    evasiveBehavior?: pulumi.Input<boolean>;
    excessiveBandwidth?: pulumi.Input<boolean>;
    hasKnownVulnerability?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    noAppIdCaching?: pulumi.Input<boolean>;
    parentApp?: pulumi.Input<string>;
    pervasiveUse?: pulumi.Input<boolean>;
    proneToMisuse?: pulumi.Input<boolean>;
    risk?: pulumi.Input<number>;
    scanning?: pulumi.Input<inputs.ApplicationObjectScanning>;
    subcategory?: pulumi.Input<string>;
    technology?: pulumi.Input<string>;
    timeoutSettings?: pulumi.Input<inputs.ApplicationObjectTimeoutSettings>;
    tunnelsOtherApplications?: pulumi.Input<boolean>;
    usedByMalware?: pulumi.Input<boolean>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApplicationObject resource.
 */
export interface ApplicationObjectArgs {
    ableToFileTransfer?: pulumi.Input<boolean>;
    algDisableCapability?: pulumi.Input<string>;
    category: pulumi.Input<string>;
    continueScanningForOtherApplications?: pulumi.Input<boolean>;
    defaults?: pulumi.Input<inputs.ApplicationObjectDefaults>;
    description?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    evasiveBehavior?: pulumi.Input<boolean>;
    excessiveBandwidth?: pulumi.Input<boolean>;
    hasKnownVulnerability?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    noAppIdCaching?: pulumi.Input<boolean>;
    parentApp?: pulumi.Input<string>;
    pervasiveUse?: pulumi.Input<boolean>;
    proneToMisuse?: pulumi.Input<boolean>;
    risk?: pulumi.Input<number>;
    scanning?: pulumi.Input<inputs.ApplicationObjectScanning>;
    subcategory: pulumi.Input<string>;
    technology: pulumi.Input<string>;
    timeoutSettings?: pulumi.Input<inputs.ApplicationObjectTimeoutSettings>;
    tunnelsOtherApplications?: pulumi.Input<boolean>;
    usedByMalware?: pulumi.Input<boolean>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
