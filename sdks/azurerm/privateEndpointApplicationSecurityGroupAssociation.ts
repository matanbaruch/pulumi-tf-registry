// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivateEndpointApplicationSecurityGroupAssociation extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointApplicationSecurityGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateEndpointApplicationSecurityGroupAssociationState, opts?: pulumi.CustomResourceOptions): PrivateEndpointApplicationSecurityGroupAssociation {
        return new PrivateEndpointApplicationSecurityGroupAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/privateEndpointApplicationSecurityGroupAssociation:PrivateEndpointApplicationSecurityGroupAssociation';

    /**
     * Returns true if the given object is an instance of PrivateEndpointApplicationSecurityGroupAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointApplicationSecurityGroupAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointApplicationSecurityGroupAssociation.__pulumiType;
    }

    public readonly applicationSecurityGroupId!: pulumi.Output<string>;
    public readonly privateEndpointId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.PrivateEndpointApplicationSecurityGroupAssociationTimeouts | undefined>;

    /**
     * Create a PrivateEndpointApplicationSecurityGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointApplicationSecurityGroupAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateEndpointApplicationSecurityGroupAssociationArgs | PrivateEndpointApplicationSecurityGroupAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateEndpointApplicationSecurityGroupAssociationState | undefined;
            resourceInputs["applicationSecurityGroupId"] = state ? state.applicationSecurityGroupId : undefined;
            resourceInputs["privateEndpointId"] = state ? state.privateEndpointId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PrivateEndpointApplicationSecurityGroupAssociationArgs | undefined;
            if ((!args || args.applicationSecurityGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationSecurityGroupId'");
            }
            if ((!args || args.privateEndpointId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateEndpointId'");
            }
            resourceInputs["applicationSecurityGroupId"] = args ? args.applicationSecurityGroupId : undefined;
            resourceInputs["privateEndpointId"] = args ? args.privateEndpointId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateEndpointApplicationSecurityGroupAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateEndpointApplicationSecurityGroupAssociation resources.
 */
export interface PrivateEndpointApplicationSecurityGroupAssociationState {
    applicationSecurityGroupId?: pulumi.Input<string>;
    privateEndpointId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivateEndpointApplicationSecurityGroupAssociationTimeouts>;
}

/**
 * The set of arguments for constructing a PrivateEndpointApplicationSecurityGroupAssociation resource.
 */
export interface PrivateEndpointApplicationSecurityGroupAssociationArgs {
    applicationSecurityGroupId: pulumi.Input<string>;
    privateEndpointId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivateEndpointApplicationSecurityGroupAssociationTimeouts>;
}
