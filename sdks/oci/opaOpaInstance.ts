// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OpaOpaInstance extends pulumi.CustomResource {
    /**
     * Get an existing OpaOpaInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OpaOpaInstanceState, opts?: pulumi.CustomResourceOptions): OpaOpaInstance {
        return new OpaOpaInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/opaOpaInstance:OpaOpaInstance';

    /**
     * Returns true if the given object is an instance of OpaOpaInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpaOpaInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpaOpaInstance.__pulumiType;
    }

    public /*out*/ readonly attachments!: pulumi.Output<outputs.OpaOpaInstanceAttachment[]>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly consumptionModel!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly idcsAt!: pulumi.Output<string>;
    public /*out*/ readonly identityAppDisplayName!: pulumi.Output<string>;
    public /*out*/ readonly identityAppGuid!: pulumi.Output<string>;
    public /*out*/ readonly identityAppOpcServiceInstanceGuid!: pulumi.Output<string>;
    public /*out*/ readonly identityDomainUrl!: pulumi.Output<string>;
    public /*out*/ readonly instanceUrl!: pulumi.Output<string>;
    public readonly isBreakglassEnabled!: pulumi.Output<boolean>;
    public readonly meteringType!: pulumi.Output<string>;
    public readonly shapeName!: pulumi.Output<string>;
    public readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.OpaOpaInstanceTimeouts | undefined>;

    /**
     * Create a OpaOpaInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpaOpaInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OpaOpaInstanceArgs | OpaOpaInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OpaOpaInstanceState | undefined;
            resourceInputs["attachments"] = state ? state.attachments : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["consumptionModel"] = state ? state.consumptionModel : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["idcsAt"] = state ? state.idcsAt : undefined;
            resourceInputs["identityAppDisplayName"] = state ? state.identityAppDisplayName : undefined;
            resourceInputs["identityAppGuid"] = state ? state.identityAppGuid : undefined;
            resourceInputs["identityAppOpcServiceInstanceGuid"] = state ? state.identityAppOpcServiceInstanceGuid : undefined;
            resourceInputs["identityDomainUrl"] = state ? state.identityDomainUrl : undefined;
            resourceInputs["instanceUrl"] = state ? state.instanceUrl : undefined;
            resourceInputs["isBreakglassEnabled"] = state ? state.isBreakglassEnabled : undefined;
            resourceInputs["meteringType"] = state ? state.meteringType : undefined;
            resourceInputs["shapeName"] = state ? state.shapeName : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as OpaOpaInstanceArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.shapeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shapeName'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["consumptionModel"] = args ? args.consumptionModel : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["idcsAt"] = args ? args.idcsAt : undefined;
            resourceInputs["isBreakglassEnabled"] = args ? args.isBreakglassEnabled : undefined;
            resourceInputs["meteringType"] = args ? args.meteringType : undefined;
            resourceInputs["shapeName"] = args ? args.shapeName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["attachments"] = undefined /*out*/;
            resourceInputs["identityAppDisplayName"] = undefined /*out*/;
            resourceInputs["identityAppGuid"] = undefined /*out*/;
            resourceInputs["identityAppOpcServiceInstanceGuid"] = undefined /*out*/;
            resourceInputs["identityDomainUrl"] = undefined /*out*/;
            resourceInputs["instanceUrl"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OpaOpaInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OpaOpaInstance resources.
 */
export interface OpaOpaInstanceState {
    attachments?: pulumi.Input<pulumi.Input<inputs.OpaOpaInstanceAttachment>[]>;
    compartmentId?: pulumi.Input<string>;
    consumptionModel?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    idcsAt?: pulumi.Input<string>;
    identityAppDisplayName?: pulumi.Input<string>;
    identityAppGuid?: pulumi.Input<string>;
    identityAppOpcServiceInstanceGuid?: pulumi.Input<string>;
    identityDomainUrl?: pulumi.Input<string>;
    instanceUrl?: pulumi.Input<string>;
    isBreakglassEnabled?: pulumi.Input<boolean>;
    meteringType?: pulumi.Input<string>;
    shapeName?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OpaOpaInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a OpaOpaInstance resource.
 */
export interface OpaOpaInstanceArgs {
    compartmentId: pulumi.Input<string>;
    consumptionModel?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    idcsAt?: pulumi.Input<string>;
    isBreakglassEnabled?: pulumi.Input<boolean>;
    meteringType?: pulumi.Input<string>;
    shapeName: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OpaOpaInstanceTimeouts>;
}
