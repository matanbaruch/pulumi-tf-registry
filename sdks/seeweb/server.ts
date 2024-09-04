// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'seeweb:index/server:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    public /*out*/ readonly activeFlag!: pulumi.Output<boolean>;
    public /*out*/ readonly apiVersion!: pulumi.Output<string>;
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    public /*out*/ readonly deletionDate!: pulumi.Output<string>;
    public readonly group!: pulumi.Output<string | undefined>;
    public readonly image!: pulumi.Output<string>;
    public /*out*/ readonly ipv4!: pulumi.Output<string>;
    public /*out*/ readonly ipv6!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly notes!: pulumi.Output<string>;
    public readonly plan!: pulumi.Output<string>;
    public /*out*/ readonly planSizes!: pulumi.Output<outputs.ServerPlanSize[]>;
    public /*out*/ readonly so!: pulumi.Output<string>;
    public readonly sshKey!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly user!: pulumi.Output<string>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerArgs | ServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServerState | undefined;
            resourceInputs["activeFlag"] = state ? state.activeFlag : undefined;
            resourceInputs["apiVersion"] = state ? state.apiVersion : undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["deletionDate"] = state ? state.deletionDate : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["image"] = state ? state.image : undefined;
            resourceInputs["ipv4"] = state ? state.ipv4 : undefined;
            resourceInputs["ipv6"] = state ? state.ipv6 : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["planSizes"] = state ? state.planSizes : undefined;
            resourceInputs["so"] = state ? state.so : undefined;
            resourceInputs["sshKey"] = state ? state.sshKey : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as ServerArgs | undefined;
            if ((!args || args.image === undefined) && !opts.urn) {
                throw new Error("Missing required property 'image'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.notes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notes'");
            }
            if ((!args || args.plan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'plan'");
            }
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["sshKey"] = args ? args.sshKey : undefined;
            resourceInputs["activeFlag"] = undefined /*out*/;
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["deletionDate"] = undefined /*out*/;
            resourceInputs["ipv4"] = undefined /*out*/;
            resourceInputs["ipv6"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["planSizes"] = undefined /*out*/;
            resourceInputs["so"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["user"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Server.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    activeFlag?: pulumi.Input<boolean>;
    apiVersion?: pulumi.Input<string>;
    creationDate?: pulumi.Input<string>;
    deletionDate?: pulumi.Input<string>;
    group?: pulumi.Input<string>;
    image?: pulumi.Input<string>;
    ipv4?: pulumi.Input<string>;
    ipv6?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    plan?: pulumi.Input<string>;
    planSizes?: pulumi.Input<pulumi.Input<inputs.ServerPlanSize>[]>;
    so?: pulumi.Input<string>;
    sshKey?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    group?: pulumi.Input<string>;
    image: pulumi.Input<string>;
    location: pulumi.Input<string>;
    notes: pulumi.Input<string>;
    plan: pulumi.Input<string>;
    sshKey?: pulumi.Input<string>;
}
