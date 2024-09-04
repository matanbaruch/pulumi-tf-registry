// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SwitchaclEgress extends pulumi.CustomResource {
    /**
     * Get an existing SwitchaclEgress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchaclEgressState, opts?: pulumi.CustomResourceOptions): SwitchaclEgress {
        return new SwitchaclEgress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/switchaclEgress:SwitchaclEgress';

    /**
     * Returns true if the given object is an instance of SwitchaclEgress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchaclEgress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchaclEgress.__pulumiType;
    }

    public readonly action!: pulumi.Output<outputs.SwitchaclEgressAction | undefined>;
    public readonly classifier!: pulumi.Output<outputs.SwitchaclEgressClassifier | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly fswid!: pulumi.Output<number>;
    public readonly group!: pulumi.Output<number>;
    public readonly interface!: pulumi.Output<string>;
    public readonly schedules!: pulumi.Output<outputs.SwitchaclEgressSchedule[] | undefined>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SwitchaclEgress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchaclEgressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchaclEgressArgs | SwitchaclEgressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchaclEgressState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["classifier"] = state ? state.classifier : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["fswid"] = state ? state.fswid : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["schedules"] = state ? state.schedules : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SwitchaclEgressArgs | undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["classifier"] = args ? args.classifier : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["fswid"] = args ? args.fswid : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["schedules"] = args ? args.schedules : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchaclEgress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchaclEgress resources.
 */
export interface SwitchaclEgressState {
    action?: pulumi.Input<inputs.SwitchaclEgressAction>;
    classifier?: pulumi.Input<inputs.SwitchaclEgressClassifier>;
    description?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fswid?: pulumi.Input<number>;
    group?: pulumi.Input<number>;
    interface?: pulumi.Input<string>;
    schedules?: pulumi.Input<pulumi.Input<inputs.SwitchaclEgressSchedule>[]>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchaclEgress resource.
 */
export interface SwitchaclEgressArgs {
    action?: pulumi.Input<inputs.SwitchaclEgressAction>;
    classifier?: pulumi.Input<inputs.SwitchaclEgressClassifier>;
    description?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fswid?: pulumi.Input<number>;
    group?: pulumi.Input<number>;
    interface?: pulumi.Input<string>;
    schedules?: pulumi.Input<pulumi.Input<inputs.SwitchaclEgressSchedule>[]>;
    status?: pulumi.Input<string>;
}
