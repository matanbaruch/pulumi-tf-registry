// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApplicationOwner extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationOwner resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationOwnerState, opts?: pulumi.CustomResourceOptions): ApplicationOwner {
        return new ApplicationOwner(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuread:index/applicationOwner:ApplicationOwner';

    /**
     * Returns true if the given object is an instance of ApplicationOwner.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationOwner {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationOwner.__pulumiType;
    }

    /**
     * The resource ID of the application to which the owner should be added
     */
    public readonly applicationId!: pulumi.Output<string>;
    /**
     * Object ID of the principal that will be granted ownership of the application
     */
    public readonly ownerObjectId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ApplicationOwnerTimeouts | undefined>;

    /**
     * Create a ApplicationOwner resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationOwnerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationOwnerArgs | ApplicationOwnerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationOwnerState | undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["ownerObjectId"] = state ? state.ownerObjectId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApplicationOwnerArgs | undefined;
            if ((!args || args.applicationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationId'");
            }
            if ((!args || args.ownerObjectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ownerObjectId'");
            }
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["ownerObjectId"] = args ? args.ownerObjectId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationOwner.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationOwner resources.
 */
export interface ApplicationOwnerState {
    /**
     * The resource ID of the application to which the owner should be added
     */
    applicationId?: pulumi.Input<string>;
    /**
     * Object ID of the principal that will be granted ownership of the application
     */
    ownerObjectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApplicationOwnerTimeouts>;
}

/**
 * The set of arguments for constructing a ApplicationOwner resource.
 */
export interface ApplicationOwnerArgs {
    /**
     * The resource ID of the application to which the owner should be added
     */
    applicationId: pulumi.Input<string>;
    /**
     * Object ID of the principal that will be granted ownership of the application
     */
    ownerObjectId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApplicationOwnerTimeouts>;
}
