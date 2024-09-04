// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogtailAttachment extends pulumi.CustomResource {
    /**
     * Get an existing LogtailAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogtailAttachmentState, opts?: pulumi.CustomResourceOptions): LogtailAttachment {
        return new LogtailAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/logtailAttachment:LogtailAttachment';

    /**
     * Returns true if the given object is an instance of LogtailAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogtailAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogtailAttachment.__pulumiType;
    }

    public readonly logtailConfigName!: pulumi.Output<string>;
    public readonly machineGroupName!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;

    /**
     * Create a LogtailAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogtailAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogtailAttachmentArgs | LogtailAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogtailAttachmentState | undefined;
            resourceInputs["logtailConfigName"] = state ? state.logtailConfigName : undefined;
            resourceInputs["machineGroupName"] = state ? state.machineGroupName : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
        } else {
            const args = argsOrState as LogtailAttachmentArgs | undefined;
            if ((!args || args.logtailConfigName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logtailConfigName'");
            }
            if ((!args || args.machineGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineGroupName'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            resourceInputs["logtailConfigName"] = args ? args.logtailConfigName : undefined;
            resourceInputs["machineGroupName"] = args ? args.machineGroupName : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogtailAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogtailAttachment resources.
 */
export interface LogtailAttachmentState {
    logtailConfigName?: pulumi.Input<string>;
    machineGroupName?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogtailAttachment resource.
 */
export interface LogtailAttachmentArgs {
    logtailConfigName: pulumi.Input<string>;
    machineGroupName: pulumi.Input<string>;
    project: pulumi.Input<string>;
}
