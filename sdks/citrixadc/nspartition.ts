// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Nspartition extends pulumi.CustomResource {
    /**
     * Get an existing Nspartition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NspartitionState, opts?: pulumi.CustomResourceOptions): Nspartition {
        return new Nspartition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/nspartition:Nspartition';

    /**
     * Returns true if the given object is an instance of Nspartition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Nspartition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Nspartition.__pulumiType;
    }

    public readonly force!: pulumi.Output<boolean>;
    public readonly maxbandwidth!: pulumi.Output<number>;
    public readonly maxconn!: pulumi.Output<number>;
    public readonly maxmemlimit!: pulumi.Output<number>;
    public readonly minbandwidth!: pulumi.Output<number>;
    public readonly partitionmac!: pulumi.Output<string>;
    public readonly partitionname!: pulumi.Output<string>;
    public readonly save!: pulumi.Output<boolean>;

    /**
     * Create a Nspartition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NspartitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NspartitionArgs | NspartitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NspartitionState | undefined;
            resourceInputs["force"] = state ? state.force : undefined;
            resourceInputs["maxbandwidth"] = state ? state.maxbandwidth : undefined;
            resourceInputs["maxconn"] = state ? state.maxconn : undefined;
            resourceInputs["maxmemlimit"] = state ? state.maxmemlimit : undefined;
            resourceInputs["minbandwidth"] = state ? state.minbandwidth : undefined;
            resourceInputs["partitionmac"] = state ? state.partitionmac : undefined;
            resourceInputs["partitionname"] = state ? state.partitionname : undefined;
            resourceInputs["save"] = state ? state.save : undefined;
        } else {
            const args = argsOrState as NspartitionArgs | undefined;
            if ((!args || args.partitionname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partitionname'");
            }
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["maxbandwidth"] = args ? args.maxbandwidth : undefined;
            resourceInputs["maxconn"] = args ? args.maxconn : undefined;
            resourceInputs["maxmemlimit"] = args ? args.maxmemlimit : undefined;
            resourceInputs["minbandwidth"] = args ? args.minbandwidth : undefined;
            resourceInputs["partitionmac"] = args ? args.partitionmac : undefined;
            resourceInputs["partitionname"] = args ? args.partitionname : undefined;
            resourceInputs["save"] = args ? args.save : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Nspartition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Nspartition resources.
 */
export interface NspartitionState {
    force?: pulumi.Input<boolean>;
    maxbandwidth?: pulumi.Input<number>;
    maxconn?: pulumi.Input<number>;
    maxmemlimit?: pulumi.Input<number>;
    minbandwidth?: pulumi.Input<number>;
    partitionmac?: pulumi.Input<string>;
    partitionname?: pulumi.Input<string>;
    save?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Nspartition resource.
 */
export interface NspartitionArgs {
    force?: pulumi.Input<boolean>;
    maxbandwidth?: pulumi.Input<number>;
    maxconn?: pulumi.Input<number>;
    maxmemlimit?: pulumi.Input<number>;
    minbandwidth?: pulumi.Input<number>;
    partitionmac?: pulumi.Input<string>;
    partitionname: pulumi.Input<string>;
    save?: pulumi.Input<boolean>;
}
