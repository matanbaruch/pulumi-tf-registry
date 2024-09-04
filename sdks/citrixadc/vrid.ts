// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Vrid extends pulumi.CustomResource {
    /**
     * Get an existing Vrid resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VridState, opts?: pulumi.CustomResourceOptions): Vrid {
        return new Vrid(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vrid:Vrid';

    /**
     * Returns true if the given object is an instance of Vrid.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vrid {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vrid.__pulumiType;
    }

    public readonly all!: pulumi.Output<boolean>;
    public readonly ownernode!: pulumi.Output<number>;
    public readonly preemption!: pulumi.Output<string>;
    public readonly preemptiondelaytimer!: pulumi.Output<number>;
    public readonly priority!: pulumi.Output<number>;
    public readonly sharing!: pulumi.Output<string>;
    public readonly trackifnumpriority!: pulumi.Output<number>;
    public readonly tracking!: pulumi.Output<string>;
    public readonly vridId!: pulumi.Output<number>;

    /**
     * Create a Vrid resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VridArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VridArgs | VridState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VridState | undefined;
            resourceInputs["all"] = state ? state.all : undefined;
            resourceInputs["ownernode"] = state ? state.ownernode : undefined;
            resourceInputs["preemption"] = state ? state.preemption : undefined;
            resourceInputs["preemptiondelaytimer"] = state ? state.preemptiondelaytimer : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["sharing"] = state ? state.sharing : undefined;
            resourceInputs["trackifnumpriority"] = state ? state.trackifnumpriority : undefined;
            resourceInputs["tracking"] = state ? state.tracking : undefined;
            resourceInputs["vridId"] = state ? state.vridId : undefined;
        } else {
            const args = argsOrState as VridArgs | undefined;
            if ((!args || args.vridId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vridId'");
            }
            resourceInputs["all"] = args ? args.all : undefined;
            resourceInputs["ownernode"] = args ? args.ownernode : undefined;
            resourceInputs["preemption"] = args ? args.preemption : undefined;
            resourceInputs["preemptiondelaytimer"] = args ? args.preemptiondelaytimer : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["sharing"] = args ? args.sharing : undefined;
            resourceInputs["trackifnumpriority"] = args ? args.trackifnumpriority : undefined;
            resourceInputs["tracking"] = args ? args.tracking : undefined;
            resourceInputs["vridId"] = args ? args.vridId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vrid.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vrid resources.
 */
export interface VridState {
    all?: pulumi.Input<boolean>;
    ownernode?: pulumi.Input<number>;
    preemption?: pulumi.Input<string>;
    preemptiondelaytimer?: pulumi.Input<number>;
    priority?: pulumi.Input<number>;
    sharing?: pulumi.Input<string>;
    trackifnumpriority?: pulumi.Input<number>;
    tracking?: pulumi.Input<string>;
    vridId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Vrid resource.
 */
export interface VridArgs {
    all?: pulumi.Input<boolean>;
    ownernode?: pulumi.Input<number>;
    preemption?: pulumi.Input<string>;
    preemptiondelaytimer?: pulumi.Input<number>;
    priority?: pulumi.Input<number>;
    sharing?: pulumi.Input<string>;
    trackifnumpriority?: pulumi.Input<number>;
    tracking?: pulumi.Input<string>;
    vridId: pulumi.Input<number>;
}
