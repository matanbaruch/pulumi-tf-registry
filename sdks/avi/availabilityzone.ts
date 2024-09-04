// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Availabilityzone extends pulumi.CustomResource {
    /**
     * Get an existing Availabilityzone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AvailabilityzoneState, opts?: pulumi.CustomResourceOptions): Availabilityzone {
        return new Availabilityzone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/availabilityzone:Availabilityzone';

    /**
     * Returns true if the given object is an instance of Availabilityzone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Availabilityzone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Availabilityzone.__pulumiType;
    }

    public readonly cloudRef!: pulumi.Output<string>;
    public readonly configpbAttributes!: pulumi.Output<outputs.AvailabilityzoneConfigpbAttribute[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;
    public readonly vcenterRefs!: pulumi.Output<string[]>;

    /**
     * Create a Availabilityzone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AvailabilityzoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AvailabilityzoneArgs | AvailabilityzoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AvailabilityzoneState | undefined;
            resourceInputs["cloudRef"] = state ? state.cloudRef : undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vcenterRefs"] = state ? state.vcenterRefs : undefined;
        } else {
            const args = argsOrState as AvailabilityzoneArgs | undefined;
            if ((!args || args.vcenterRefs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vcenterRefs'");
            }
            resourceInputs["cloudRef"] = args ? args.cloudRef : undefined;
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vcenterRefs"] = args ? args.vcenterRefs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Availabilityzone.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Availabilityzone resources.
 */
export interface AvailabilityzoneState {
    cloudRef?: pulumi.Input<string>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.AvailabilityzoneConfigpbAttribute>[]>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vcenterRefs?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Availabilityzone resource.
 */
export interface AvailabilityzoneArgs {
    cloudRef?: pulumi.Input<string>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.AvailabilityzoneConfigpbAttribute>[]>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vcenterRefs: pulumi.Input<pulumi.Input<string>[]>;
}
