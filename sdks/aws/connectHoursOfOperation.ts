// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConnectHoursOfOperation extends pulumi.CustomResource {
    /**
     * Get an existing ConnectHoursOfOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectHoursOfOperationState, opts?: pulumi.CustomResourceOptions): ConnectHoursOfOperation {
        return new ConnectHoursOfOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/connectHoursOfOperation:ConnectHoursOfOperation';

    /**
     * Returns true if the given object is an instance of ConnectHoursOfOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectHoursOfOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectHoursOfOperation.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly configs!: pulumi.Output<outputs.ConnectHoursOfOperationConfig[]>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly hoursOfOperationId!: pulumi.Output<string>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeZone!: pulumi.Output<string>;

    /**
     * Create a ConnectHoursOfOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectHoursOfOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConnectHoursOfOperationArgs | ConnectHoursOfOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConnectHoursOfOperationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["configs"] = state ? state.configs : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["hoursOfOperationId"] = state ? state.hoursOfOperationId : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeZone"] = state ? state.timeZone : undefined;
        } else {
            const args = argsOrState as ConnectHoursOfOperationArgs | undefined;
            if ((!args || args.configs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configs'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.timeZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeZone'");
            }
            resourceInputs["configs"] = args ? args.configs : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["hoursOfOperationId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConnectHoursOfOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConnectHoursOfOperation resources.
 */
export interface ConnectHoursOfOperationState {
    arn?: pulumi.Input<string>;
    configs?: pulumi.Input<pulumi.Input<inputs.ConnectHoursOfOperationConfig>[]>;
    description?: pulumi.Input<string>;
    hoursOfOperationId?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeZone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ConnectHoursOfOperation resource.
 */
export interface ConnectHoursOfOperationArgs {
    configs: pulumi.Input<pulumi.Input<inputs.ConnectHoursOfOperationConfig>[]>;
    description?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeZone: pulumi.Input<string>;
}
