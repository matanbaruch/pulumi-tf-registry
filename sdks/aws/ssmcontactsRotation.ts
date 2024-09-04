// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SsmcontactsRotation extends pulumi.CustomResource {
    /**
     * Get an existing SsmcontactsRotation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsmcontactsRotationState, opts?: pulumi.CustomResourceOptions): SsmcontactsRotation {
        return new SsmcontactsRotation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ssmcontactsRotation:SsmcontactsRotation';

    /**
     * Returns true if the given object is an instance of SsmcontactsRotation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SsmcontactsRotation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SsmcontactsRotation.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly contactIds!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly recurrences!: pulumi.Output<outputs.SsmcontactsRotationRecurrence[] | undefined>;
    public readonly startTime!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeZoneId!: pulumi.Output<string>;

    /**
     * Create a SsmcontactsRotation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsmcontactsRotationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SsmcontactsRotationArgs | SsmcontactsRotationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SsmcontactsRotationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["contactIds"] = state ? state.contactIds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["recurrences"] = state ? state.recurrences : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeZoneId"] = state ? state.timeZoneId : undefined;
        } else {
            const args = argsOrState as SsmcontactsRotationArgs | undefined;
            if ((!args || args.contactIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactIds'");
            }
            if ((!args || args.timeZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeZoneId'");
            }
            resourceInputs["contactIds"] = args ? args.contactIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["recurrences"] = args ? args.recurrences : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeZoneId"] = args ? args.timeZoneId : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["tagsAll"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SsmcontactsRotation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SsmcontactsRotation resources.
 */
export interface SsmcontactsRotationState {
    arn?: pulumi.Input<string>;
    contactIds?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    recurrences?: pulumi.Input<pulumi.Input<inputs.SsmcontactsRotationRecurrence>[]>;
    startTime?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeZoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SsmcontactsRotation resource.
 */
export interface SsmcontactsRotationArgs {
    contactIds: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    recurrences?: pulumi.Input<pulumi.Input<inputs.SsmcontactsRotationRecurrence>[]>;
    startTime?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeZoneId: pulumi.Input<string>;
}
