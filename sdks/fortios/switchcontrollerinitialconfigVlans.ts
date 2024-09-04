// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SwitchcontrollerinitialconfigVlans extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerinitialconfigVlans resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerinitialconfigVlansState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerinitialconfigVlans {
        return new SwitchcontrollerinitialconfigVlans(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/switchcontrollerinitialconfigVlans:SwitchcontrollerinitialconfigVlans';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerinitialconfigVlans.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerinitialconfigVlans {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerinitialconfigVlans.__pulumiType;
    }

    public readonly defaultVlan!: pulumi.Output<string>;
    public readonly nac!: pulumi.Output<string>;
    public readonly nacSegment!: pulumi.Output<string>;
    public readonly quarantine!: pulumi.Output<string>;
    public readonly rspan!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;
    public readonly video!: pulumi.Output<string>;
    public readonly voice!: pulumi.Output<string>;

    /**
     * Create a SwitchcontrollerinitialconfigVlans resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerinitialconfigVlansArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerinitialconfigVlansArgs | SwitchcontrollerinitialconfigVlansState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerinitialconfigVlansState | undefined;
            resourceInputs["defaultVlan"] = state ? state.defaultVlan : undefined;
            resourceInputs["nac"] = state ? state.nac : undefined;
            resourceInputs["nacSegment"] = state ? state.nacSegment : undefined;
            resourceInputs["quarantine"] = state ? state.quarantine : undefined;
            resourceInputs["rspan"] = state ? state.rspan : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
            resourceInputs["video"] = state ? state.video : undefined;
            resourceInputs["voice"] = state ? state.voice : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerinitialconfigVlansArgs | undefined;
            resourceInputs["defaultVlan"] = args ? args.defaultVlan : undefined;
            resourceInputs["nac"] = args ? args.nac : undefined;
            resourceInputs["nacSegment"] = args ? args.nacSegment : undefined;
            resourceInputs["quarantine"] = args ? args.quarantine : undefined;
            resourceInputs["rspan"] = args ? args.rspan : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
            resourceInputs["video"] = args ? args.video : undefined;
            resourceInputs["voice"] = args ? args.voice : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerinitialconfigVlans.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerinitialconfigVlans resources.
 */
export interface SwitchcontrollerinitialconfigVlansState {
    defaultVlan?: pulumi.Input<string>;
    nac?: pulumi.Input<string>;
    nacSegment?: pulumi.Input<string>;
    quarantine?: pulumi.Input<string>;
    rspan?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    video?: pulumi.Input<string>;
    voice?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerinitialconfigVlans resource.
 */
export interface SwitchcontrollerinitialconfigVlansArgs {
    defaultVlan?: pulumi.Input<string>;
    nac?: pulumi.Input<string>;
    nacSegment?: pulumi.Input<string>;
    quarantine?: pulumi.Input<string>;
    rspan?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    video?: pulumi.Input<string>;
    voice?: pulumi.Input<string>;
}
