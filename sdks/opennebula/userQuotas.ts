// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class UserQuotas extends pulumi.CustomResource {
    /**
     * Get an existing UserQuotas resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserQuotasState, opts?: pulumi.CustomResourceOptions): UserQuotas {
        return new UserQuotas(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opennebula:index/userQuotas:UserQuotas';

    /**
     * Returns true if the given object is an instance of UserQuotas.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserQuotas {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserQuotas.__pulumiType;
    }

    /**
     * Datastore quotas
     */
    public readonly datastores!: pulumi.Output<outputs.UserQuotasDatastore[] | undefined>;
    /**
     * Image quotas
     */
    public readonly images!: pulumi.Output<outputs.UserQuotasImage[] | undefined>;
    /**
     * Network quotas
     */
    public readonly networks!: pulumi.Output<outputs.UserQuotasNetwork[] | undefined>;
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * ID of the user to apply the quota
     */
    public readonly userId!: pulumi.Output<number>;
    /**
     * VM quotas
     */
    public readonly vms!: pulumi.Output<outputs.UserQuotasVm[] | undefined>;

    /**
     * Create a UserQuotas resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserQuotasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserQuotasArgs | UserQuotasState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserQuotasState | undefined;
            resourceInputs["datastores"] = state ? state.datastores : undefined;
            resourceInputs["images"] = state ? state.images : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
            resourceInputs["vms"] = state ? state.vms : undefined;
        } else {
            const args = argsOrState as UserQuotasArgs | undefined;
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["datastores"] = args ? args.datastores : undefined;
            resourceInputs["images"] = args ? args.images : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["vms"] = args ? args.vms : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserQuotas.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserQuotas resources.
 */
export interface UserQuotasState {
    /**
     * Datastore quotas
     */
    datastores?: pulumi.Input<pulumi.Input<inputs.UserQuotasDatastore>[]>;
    /**
     * Image quotas
     */
    images?: pulumi.Input<pulumi.Input<inputs.UserQuotasImage>[]>;
    /**
     * Network quotas
     */
    networks?: pulumi.Input<pulumi.Input<inputs.UserQuotasNetwork>[]>;
    type?: pulumi.Input<string>;
    /**
     * ID of the user to apply the quota
     */
    userId?: pulumi.Input<number>;
    /**
     * VM quotas
     */
    vms?: pulumi.Input<pulumi.Input<inputs.UserQuotasVm>[]>;
}

/**
 * The set of arguments for constructing a UserQuotas resource.
 */
export interface UserQuotasArgs {
    /**
     * Datastore quotas
     */
    datastores?: pulumi.Input<pulumi.Input<inputs.UserQuotasDatastore>[]>;
    /**
     * Image quotas
     */
    images?: pulumi.Input<pulumi.Input<inputs.UserQuotasImage>[]>;
    /**
     * Network quotas
     */
    networks?: pulumi.Input<pulumi.Input<inputs.UserQuotasNetwork>[]>;
    /**
     * ID of the user to apply the quota
     */
    userId: pulumi.Input<number>;
    /**
     * VM quotas
     */
    vms?: pulumi.Input<pulumi.Input<inputs.UserQuotasVm>[]>;
}
