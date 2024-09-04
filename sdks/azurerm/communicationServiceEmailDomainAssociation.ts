// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CommunicationServiceEmailDomainAssociation extends pulumi.CustomResource {
    /**
     * Get an existing CommunicationServiceEmailDomainAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CommunicationServiceEmailDomainAssociationState, opts?: pulumi.CustomResourceOptions): CommunicationServiceEmailDomainAssociation {
        return new CommunicationServiceEmailDomainAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/communicationServiceEmailDomainAssociation:CommunicationServiceEmailDomainAssociation';

    /**
     * Returns true if the given object is an instance of CommunicationServiceEmailDomainAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CommunicationServiceEmailDomainAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CommunicationServiceEmailDomainAssociation.__pulumiType;
    }

    public readonly communicationServiceId!: pulumi.Output<string>;
    public readonly emailServiceDomainId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CommunicationServiceEmailDomainAssociationTimeouts | undefined>;

    /**
     * Create a CommunicationServiceEmailDomainAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommunicationServiceEmailDomainAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CommunicationServiceEmailDomainAssociationArgs | CommunicationServiceEmailDomainAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CommunicationServiceEmailDomainAssociationState | undefined;
            resourceInputs["communicationServiceId"] = state ? state.communicationServiceId : undefined;
            resourceInputs["emailServiceDomainId"] = state ? state.emailServiceDomainId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CommunicationServiceEmailDomainAssociationArgs | undefined;
            if ((!args || args.communicationServiceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'communicationServiceId'");
            }
            if ((!args || args.emailServiceDomainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailServiceDomainId'");
            }
            resourceInputs["communicationServiceId"] = args ? args.communicationServiceId : undefined;
            resourceInputs["emailServiceDomainId"] = args ? args.emailServiceDomainId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CommunicationServiceEmailDomainAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CommunicationServiceEmailDomainAssociation resources.
 */
export interface CommunicationServiceEmailDomainAssociationState {
    communicationServiceId?: pulumi.Input<string>;
    emailServiceDomainId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CommunicationServiceEmailDomainAssociationTimeouts>;
}

/**
 * The set of arguments for constructing a CommunicationServiceEmailDomainAssociation resource.
 */
export interface CommunicationServiceEmailDomainAssociationArgs {
    communicationServiceId: pulumi.Input<string>;
    emailServiceDomainId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CommunicationServiceEmailDomainAssociationTimeouts>;
}
