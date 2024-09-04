// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SecurityProfileGroup extends pulumi.CustomResource {
    /**
     * Get an existing SecurityProfileGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityProfileGroupState, opts?: pulumi.CustomResourceOptions): SecurityProfileGroup {
        return new SecurityProfileGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/securityProfileGroup:SecurityProfileGroup';

    /**
     * Returns true if the given object is an instance of SecurityProfileGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityProfileGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityProfileGroup.__pulumiType;
    }

    public readonly antiSpywareProfile!: pulumi.Output<string | undefined>;
    public readonly antivirusProfile!: pulumi.Output<string | undefined>;
    public readonly dataFilteringProfile!: pulumi.Output<string | undefined>;
    /**
     * The device group.
     */
    public readonly deviceGroup!: pulumi.Output<string | undefined>;
    public readonly fileBlockingProfile!: pulumi.Output<string | undefined>;
    public readonly gtpProfile!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly sctpProfile!: pulumi.Output<string | undefined>;
    public readonly urlFilteringProfile!: pulumi.Output<string | undefined>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;
    public readonly vulnerabilityProfile!: pulumi.Output<string | undefined>;
    public readonly wildfireAnalysisProfile!: pulumi.Output<string | undefined>;

    /**
     * Create a SecurityProfileGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecurityProfileGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityProfileGroupArgs | SecurityProfileGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityProfileGroupState | undefined;
            resourceInputs["antiSpywareProfile"] = state ? state.antiSpywareProfile : undefined;
            resourceInputs["antivirusProfile"] = state ? state.antivirusProfile : undefined;
            resourceInputs["dataFilteringProfile"] = state ? state.dataFilteringProfile : undefined;
            resourceInputs["deviceGroup"] = state ? state.deviceGroup : undefined;
            resourceInputs["fileBlockingProfile"] = state ? state.fileBlockingProfile : undefined;
            resourceInputs["gtpProfile"] = state ? state.gtpProfile : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sctpProfile"] = state ? state.sctpProfile : undefined;
            resourceInputs["urlFilteringProfile"] = state ? state.urlFilteringProfile : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
            resourceInputs["vulnerabilityProfile"] = state ? state.vulnerabilityProfile : undefined;
            resourceInputs["wildfireAnalysisProfile"] = state ? state.wildfireAnalysisProfile : undefined;
        } else {
            const args = argsOrState as SecurityProfileGroupArgs | undefined;
            resourceInputs["antiSpywareProfile"] = args ? args.antiSpywareProfile : undefined;
            resourceInputs["antivirusProfile"] = args ? args.antivirusProfile : undefined;
            resourceInputs["dataFilteringProfile"] = args ? args.dataFilteringProfile : undefined;
            resourceInputs["deviceGroup"] = args ? args.deviceGroup : undefined;
            resourceInputs["fileBlockingProfile"] = args ? args.fileBlockingProfile : undefined;
            resourceInputs["gtpProfile"] = args ? args.gtpProfile : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sctpProfile"] = args ? args.sctpProfile : undefined;
            resourceInputs["urlFilteringProfile"] = args ? args.urlFilteringProfile : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
            resourceInputs["vulnerabilityProfile"] = args ? args.vulnerabilityProfile : undefined;
            resourceInputs["wildfireAnalysisProfile"] = args ? args.wildfireAnalysisProfile : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityProfileGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityProfileGroup resources.
 */
export interface SecurityProfileGroupState {
    antiSpywareProfile?: pulumi.Input<string>;
    antivirusProfile?: pulumi.Input<string>;
    dataFilteringProfile?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    fileBlockingProfile?: pulumi.Input<string>;
    gtpProfile?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    sctpProfile?: pulumi.Input<string>;
    urlFilteringProfile?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
    vulnerabilityProfile?: pulumi.Input<string>;
    wildfireAnalysisProfile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityProfileGroup resource.
 */
export interface SecurityProfileGroupArgs {
    antiSpywareProfile?: pulumi.Input<string>;
    antivirusProfile?: pulumi.Input<string>;
    dataFilteringProfile?: pulumi.Input<string>;
    /**
     * The device group.
     */
    deviceGroup?: pulumi.Input<string>;
    fileBlockingProfile?: pulumi.Input<string>;
    gtpProfile?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    sctpProfile?: pulumi.Input<string>;
    urlFilteringProfile?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
    vulnerabilityProfile?: pulumi.Input<string>;
    wildfireAnalysisProfile?: pulumi.Input<string>;
}
