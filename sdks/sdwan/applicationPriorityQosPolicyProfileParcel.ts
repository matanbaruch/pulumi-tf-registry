// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApplicationPriorityQosPolicyProfileParcel extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationPriorityQosPolicyProfileParcel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationPriorityQosPolicyProfileParcelState, opts?: pulumi.CustomResourceOptions): ApplicationPriorityQosPolicyProfileParcel {
        return new ApplicationPriorityQosPolicyProfileParcel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/applicationPriorityQosPolicyProfileParcel:ApplicationPriorityQosPolicyProfileParcel';

    /**
     * Returns true if the given object is an instance of ApplicationPriorityQosPolicyProfileParcel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationPriorityQosPolicyProfileParcel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationPriorityQosPolicyProfileParcel.__pulumiType;
    }

    /**
     * The description of the profile parcel
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Feature Profile ID
     */
    public readonly featureProfileId!: pulumi.Output<string>;
    /**
     * The name of the profile parcel
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * qosSchedulers
     */
    public readonly qosSchedulers!: pulumi.Output<outputs.ApplicationPriorityQosPolicyProfileParcelQosScheduler[] | undefined>;
    /**
     * Variable name
     */
    public readonly targetInterfaceVariable!: pulumi.Output<string | undefined>;
    /**
     * interfaces
     */
    public readonly targetInterfaces!: pulumi.Output<string[] | undefined>;
    /**
     * The version of the profile parcel
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a ApplicationPriorityQosPolicyProfileParcel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationPriorityQosPolicyProfileParcelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationPriorityQosPolicyProfileParcelArgs | ApplicationPriorityQosPolicyProfileParcelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationPriorityQosPolicyProfileParcelState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["featureProfileId"] = state ? state.featureProfileId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qosSchedulers"] = state ? state.qosSchedulers : undefined;
            resourceInputs["targetInterfaceVariable"] = state ? state.targetInterfaceVariable : undefined;
            resourceInputs["targetInterfaces"] = state ? state.targetInterfaces : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ApplicationPriorityQosPolicyProfileParcelArgs | undefined;
            if ((!args || args.featureProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'featureProfileId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["featureProfileId"] = args ? args.featureProfileId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qosSchedulers"] = args ? args.qosSchedulers : undefined;
            resourceInputs["targetInterfaceVariable"] = args ? args.targetInterfaceVariable : undefined;
            resourceInputs["targetInterfaces"] = args ? args.targetInterfaces : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationPriorityQosPolicyProfileParcel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationPriorityQosPolicyProfileParcel resources.
 */
export interface ApplicationPriorityQosPolicyProfileParcelState {
    /**
     * The description of the profile parcel
     */
    description?: pulumi.Input<string>;
    /**
     * Feature Profile ID
     */
    featureProfileId?: pulumi.Input<string>;
    /**
     * The name of the profile parcel
     */
    name?: pulumi.Input<string>;
    /**
     * qosSchedulers
     */
    qosSchedulers?: pulumi.Input<pulumi.Input<inputs.ApplicationPriorityQosPolicyProfileParcelQosScheduler>[]>;
    /**
     * Variable name
     */
    targetInterfaceVariable?: pulumi.Input<string>;
    /**
     * interfaces
     */
    targetInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The version of the profile parcel
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ApplicationPriorityQosPolicyProfileParcel resource.
 */
export interface ApplicationPriorityQosPolicyProfileParcelArgs {
    /**
     * The description of the profile parcel
     */
    description?: pulumi.Input<string>;
    /**
     * Feature Profile ID
     */
    featureProfileId: pulumi.Input<string>;
    /**
     * The name of the profile parcel
     */
    name?: pulumi.Input<string>;
    /**
     * qosSchedulers
     */
    qosSchedulers?: pulumi.Input<pulumi.Input<inputs.ApplicationPriorityQosPolicyProfileParcelQosScheduler>[]>;
    /**
     * Variable name
     */
    targetInterfaceVariable?: pulumi.Input<string>;
    /**
     * interfaces
     */
    targetInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
}
