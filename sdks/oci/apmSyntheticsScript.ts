// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApmSyntheticsScript extends pulumi.CustomResource {
    /**
     * Get an existing ApmSyntheticsScript resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApmSyntheticsScriptState, opts?: pulumi.CustomResourceOptions): ApmSyntheticsScript {
        return new ApmSyntheticsScript(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/apmSyntheticsScript:ApmSyntheticsScript';

    /**
     * Returns true if the given object is an instance of ApmSyntheticsScript.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApmSyntheticsScript {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApmSyntheticsScript.__pulumiType;
    }

    public readonly apmDomainId!: pulumi.Output<string>;
    public readonly content!: pulumi.Output<string>;
    public readonly contentFileName!: pulumi.Output<string>;
    public /*out*/ readonly contentSizeInBytes!: pulumi.Output<number>;
    public readonly contentType!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly monitorStatusCountMaps!: pulumi.Output<outputs.ApmSyntheticsScriptMonitorStatusCountMap[]>;
    public readonly parameters!: pulumi.Output<outputs.ApmSyntheticsScriptParameter[] | undefined>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public /*out*/ readonly timeUploaded!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ApmSyntheticsScriptTimeouts | undefined>;

    /**
     * Create a ApmSyntheticsScript resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApmSyntheticsScriptArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApmSyntheticsScriptArgs | ApmSyntheticsScriptState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApmSyntheticsScriptState | undefined;
            resourceInputs["apmDomainId"] = state ? state.apmDomainId : undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["contentFileName"] = state ? state.contentFileName : undefined;
            resourceInputs["contentSizeInBytes"] = state ? state.contentSizeInBytes : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["monitorStatusCountMaps"] = state ? state.monitorStatusCountMaps : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeUploaded"] = state ? state.timeUploaded : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApmSyntheticsScriptArgs | undefined;
            if ((!args || args.apmDomainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apmDomainId'");
            }
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.contentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentType'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["apmDomainId"] = args ? args.apmDomainId : undefined;
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["contentFileName"] = args ? args.contentFileName : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["contentSizeInBytes"] = undefined /*out*/;
            resourceInputs["monitorStatusCountMaps"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
            resourceInputs["timeUploaded"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApmSyntheticsScript.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApmSyntheticsScript resources.
 */
export interface ApmSyntheticsScriptState {
    apmDomainId?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    contentFileName?: pulumi.Input<string>;
    contentSizeInBytes?: pulumi.Input<number>;
    contentType?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    monitorStatusCountMaps?: pulumi.Input<pulumi.Input<inputs.ApmSyntheticsScriptMonitorStatusCountMap>[]>;
    parameters?: pulumi.Input<pulumi.Input<inputs.ApmSyntheticsScriptParameter>[]>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeUploaded?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApmSyntheticsScriptTimeouts>;
}

/**
 * The set of arguments for constructing a ApmSyntheticsScript resource.
 */
export interface ApmSyntheticsScriptArgs {
    apmDomainId: pulumi.Input<string>;
    content: pulumi.Input<string>;
    contentFileName?: pulumi.Input<string>;
    contentType: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    parameters?: pulumi.Input<pulumi.Input<inputs.ApmSyntheticsScriptParameter>[]>;
    timeouts?: pulumi.Input<inputs.ApmSyntheticsScriptTimeouts>;
}
