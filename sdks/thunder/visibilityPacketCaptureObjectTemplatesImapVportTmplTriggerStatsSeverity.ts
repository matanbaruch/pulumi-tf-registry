// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity {
        return new VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity:VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity.__pulumiType;
    }

    /**
     * Enable packet capture on all drop counters (Default disabled)
     */
    public readonly drop!: pulumi.Output<number | undefined>;
    /**
     * Enable packet capture on all alert drop counters (Default disabled)
     */
    public readonly dropAlert!: pulumi.Output<number | undefined>;
    /**
     * Enable packet capture on all critical drop counters (Default disabled)
     */
    public readonly dropCritical!: pulumi.Output<number | undefined>;
    /**
     * Enable packet capture on all warning drop counters (Default disabled)
     */
    public readonly dropWarning!: pulumi.Output<number | undefined>;
    /**
     * Enable packet capture on all error counters (Default disabled)
     */
    public readonly error!: pulumi.Output<number | undefined>;
    /**
     * Enable packet capture on all alert error counters (Default disabled)
     */
    public readonly errorAlert!: pulumi.Output<number | undefined>;
    /**
     * Enable packet capture on all critical error counters (Default disabled)
     */
    public readonly errorCritical!: pulumi.Output<number | undefined>;
    /**
     * Enable packet capture on all warning error counters (Default disabled)
     */
    public readonly errorWarning!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityArgs | VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityState | undefined;
            resourceInputs["drop"] = state ? state.drop : undefined;
            resourceInputs["dropAlert"] = state ? state.dropAlert : undefined;
            resourceInputs["dropCritical"] = state ? state.dropCritical : undefined;
            resourceInputs["dropWarning"] = state ? state.dropWarning : undefined;
            resourceInputs["error"] = state ? state.error : undefined;
            resourceInputs["errorAlert"] = state ? state.errorAlert : undefined;
            resourceInputs["errorCritical"] = state ? state.errorCritical : undefined;
            resourceInputs["errorWarning"] = state ? state.errorWarning : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityArgs | undefined;
            resourceInputs["drop"] = args ? args.drop : undefined;
            resourceInputs["dropAlert"] = args ? args.dropAlert : undefined;
            resourceInputs["dropCritical"] = args ? args.dropCritical : undefined;
            resourceInputs["dropWarning"] = args ? args.dropWarning : undefined;
            resourceInputs["error"] = args ? args.error : undefined;
            resourceInputs["errorAlert"] = args ? args.errorAlert : undefined;
            resourceInputs["errorCritical"] = args ? args.errorCritical : undefined;
            resourceInputs["errorWarning"] = args ? args.errorWarning : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity resources.
 */
export interface VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityState {
    /**
     * Enable packet capture on all drop counters (Default disabled)
     */
    drop?: pulumi.Input<number>;
    /**
     * Enable packet capture on all alert drop counters (Default disabled)
     */
    dropAlert?: pulumi.Input<number>;
    /**
     * Enable packet capture on all critical drop counters (Default disabled)
     */
    dropCritical?: pulumi.Input<number>;
    /**
     * Enable packet capture on all warning drop counters (Default disabled)
     */
    dropWarning?: pulumi.Input<number>;
    /**
     * Enable packet capture on all error counters (Default disabled)
     */
    error?: pulumi.Input<number>;
    /**
     * Enable packet capture on all alert error counters (Default disabled)
     */
    errorAlert?: pulumi.Input<number>;
    /**
     * Enable packet capture on all critical error counters (Default disabled)
     */
    errorCritical?: pulumi.Input<number>;
    /**
     * Enable packet capture on all warning error counters (Default disabled)
     */
    errorWarning?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverity resource.
 */
export interface VisibilityPacketCaptureObjectTemplatesImapVportTmplTriggerStatsSeverityArgs {
    /**
     * Enable packet capture on all drop counters (Default disabled)
     */
    drop?: pulumi.Input<number>;
    /**
     * Enable packet capture on all alert drop counters (Default disabled)
     */
    dropAlert?: pulumi.Input<number>;
    /**
     * Enable packet capture on all critical drop counters (Default disabled)
     */
    dropCritical?: pulumi.Input<number>;
    /**
     * Enable packet capture on all warning drop counters (Default disabled)
     */
    dropWarning?: pulumi.Input<number>;
    /**
     * Enable packet capture on all error counters (Default disabled)
     */
    error?: pulumi.Input<number>;
    /**
     * Enable packet capture on all alert error counters (Default disabled)
     */
    errorAlert?: pulumi.Input<number>;
    /**
     * Enable packet capture on all critical error counters (Default disabled)
     */
    errorCritical?: pulumi.Input<number>;
    /**
     * Enable packet capture on all warning error counters (Default disabled)
     */
    errorWarning?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
